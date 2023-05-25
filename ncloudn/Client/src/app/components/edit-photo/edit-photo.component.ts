import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { GetPhotosFromServerService } from 'src/app/service/general/get-photos-from-server/get-photos-from-server.service';
import { SaveFileService } from 'src/app/service/general/send-photos-to-server/send-photos-to-server';


@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {

  photo: Photo;
  isPrivate: Boolean;
  isFave: Boolean;

  constructor(private route: ActivatedRoute, private photoService: SaveFileService, private getPhotoService: GetPhotosFromServerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      let id = value["id"];
      this.getPhotoService.recieveFoundPhotoFromServer(id).subscribe((photo) => {
        this.photo = photo;
      })
    });
  };

  privateOrPublic() {
    this.isPrivate = !this.isPrivate;
    if(this.isPrivate) {
      this.photo.isPrivate = true;
      this.onSubmit();
    } else {
      this.photo.isPrivate = false;
      this.onSubmit();
    }
  }
  addToFaveriots() {
    this.isFave = !this.isFave;
    if(this.isFave) {
      this.photo.faveriot = true;
      this.onSubmit();
    } else {
      this.photo.faveriot = false;
      this.onSubmit();
    }
  }
  onSubmit() {
    this.photoService.updateDataBase(this.photo)
  }

  getUbicationEvent(event){
    this.photo.location = event;
  }
}

