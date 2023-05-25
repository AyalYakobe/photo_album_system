import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { GetPhotosFromServerService } from 'src/app/service/general/get-photos-from-server/get-photos-from-server.service';
import { RoutingService } from 'src/app/service/routing/routing.service';
import { interval } from 'rxjs';
import { PrivacyService } from 'src/app/service/general/privacy/privacy.service';

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {
  album: Photo[];
  photo: Photo;
  number: number;
  constructor(private service: GetPhotosFromServerService, private privacy: PrivacyService, private route: RoutingService) { }

  ngOnInit(): void {
    if(this.privacy.isOnPrivateMode == true) {
      this.service.recieveAllGallery().subscribe(response => {
        this.album = response;
        console.log(this.album);
        this.number = this.album.length;
        console.log(this.number);
        interval(1500).subscribe(x => {
          let theRandomImageNumber = Math.floor(Math.random() * this.number);
          console.log(theRandomImageNumber);
          let myimge = this.album[theRandomImageNumber]; //get the wanted result - random image
          console.log(myimge);
          let id = myimge["id"];
          console.log(id);
          this.service.recieveFoundPhotoFromServer(id).subscribe((photo) => { //get the wanted result - random image - same
            this.photo = photo;
            console.log(this.photo);
          })
        });
  
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
    } else {
      this.service.recieveOnlyPublicGallery().subscribe(response => {
        this.album = response;
        console.log(this.album);
        this.number = this.album.length;
        console.log(this.number);
        interval(1500).subscribe(x => {
          let theRandomImageNumber = Math.floor(Math.random() * this.number);
          console.log(theRandomImageNumber);
          let myimge = this.album[theRandomImageNumber]; //get the wanted result - random image
          console.log(myimge);
          let id = myimge["id"];
          console.log(id);
          this.service.recieveFoundPhotoFromServer(id).subscribe((photo) => { //get the wanted result - random image - same
            this.photo = photo;
            console.log(this.photo);
          })
        });
  
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
    }
  }

  getRandomInt(max) { // max is the max lenght of array
    return Math.floor(Math.random() * max);
  }

  goBackToWelcome() {
    this.route.goBackToWelcome();
  }

}
