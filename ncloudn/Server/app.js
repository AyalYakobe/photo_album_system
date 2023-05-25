const express = require('express')
const multer = require('multer');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');
var cors = require('cors');
const { send } = require('process');

let dataBase;
const getData = () => {
    fs.promises.readFile('data-base/data-base.json').then((res) => {
        dataBase = JSON.parse(res);
    }).catch((err) => {
        console.log(err);
    });
}
getData();

const updateDataBase = () => {
    return fs.promises.writeFile('data-base/data-base.json', JSON.stringify(dataBase));
}

//CREATE EXPRESS APP
const app = express();
app.use(cors());
app.use(express.json({limit: "10mb"}));

app.post('/uploaded-photo', (req, res, next) => {

    if(!dataBase.album) {
        dataBase.album = [];
    }

    const file = req.body;
    console.log(file);
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    file.id = uuidv4();
    file.isPrivate = false;

    dataBase.album.push(file);
    updateDataBase().then(() => {
        res.status(200).send({
            statusCode: 200,
            status: 'success',
            uploadedFile: file
        }).catch(error => {
            res.status(400).send({
                error: error.message
            })
        })    
    });

}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
});
app.post('/webcam-photo', (req, res, next) => {

    if(!dataBase.album) {
        dataBase.album = [];
    }

    const file = req.body;
    console.log(file);
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }

    file.id = uuidv4();

    dataBase.album.push(file);
    updateDataBase().then(() => {
        res.status(200).send({
            statusCode: 200,
            status: 'success',
            uploadedFile: file
        }).catch(error => {
            res.status(400).send({
                error: error.message
            })
        })    
    });

}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
});
app.post('/update', (req, res, next) => {
    let photo = req.body;
    console.log(photo);
    if(photo) {
        const newPhoto = dataBase.album.find((value) =>{
            if(value.id == photo.id) {
                return true;
            } else {
                return false;
            }
        });
        newPhoto.title = photo.title;
        newPhoto.category = photo.category;
        newPhoto.location = photo.location || {};
        newPhoto.isPrivate = !! photo.isPrivate;
        newPhoto.faveriot = !! photo.faveriot;
        newPhoto.imagePath = photo.imagePath;
        newPhoto.id = photo.id;
        updateDataBase().then(() => {
            res.send("updated");
        }).catch((error) => {
            console.log(error);
            res.status(500).send("failed");
        })
    } else {
        res.status(400).send("no photo");
    }
})

app.get('/', function (req, res) {
    res.json({ message: 'Server Started!' });
});
app.get('/gallery', (req, res) => {
    res.send(dataBase.album)
})
app.get('/get-photo-by-id', (req, res) => {
    const id = req.query.id;
    const foundImage = dataBase.album.find((value) => {
        if(value.id == id) {
            return true;
        } else {
            return false;
        }
    });
    res.send(foundImage);
})
app.get('/get-public-gallery', (req, res) => {
    let publicGallery = [];
    dataBase.album.find((value) => {
        if(value.isPrivate == false) {
            publicGallery.push(value);
        }
    });
    res.send(publicGallery);
});
app.get('/get-faveriots-gallery', (req, res) => {
    let faveriotsGallery = [];
    dataBase.album.find((value) => {
        if(value.faveriot == true) {
            faveriotsGallery.push(value);
        }
    });
    res.send(faveriotsGallery);
});
app.get('/get-private-faveriots-gallery', (req, res) => {
    let privateFaveriotsGallery = [];
    dataBase.album.find((value) => {
        if(value.faveriot == true && value.isPrivate == true) {
            privateFaveriotsGallery.push(value);
        }
    });
    res.send(privateFaveriotsGallery);
});
app.get('/get-all-categories-gallery', (req, res) => {
    const category = req.query.category;
    let categoriesGallery = [];
    dataBase.album.find((value) => {
        if(value.category == category) {
            categoriesGallery.push(value);
        }
    });
    res.send(categoriesGallery);
})
app.get('/get-limited-categories-gallery', (req, res) => {
    const category = req.query.category;
    let categoriesGallery = [];
    dataBase.album.find((value) => {
        if(value.category == category && value.isPrivate == false) {
            categoriesGallery.push(value);
        }
    });
    res.send(categoriesGallery);
})

app.listen(3000, () => console.log('Server started on port 3000'));