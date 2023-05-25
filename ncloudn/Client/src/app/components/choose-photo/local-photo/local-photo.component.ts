import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { SaveFileService } from 'src/app/service/general/send-photos-to-server/send-photos-to-server';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-local-photo',
  templateUrl: './local-photo.component.html',
  styleUrls: ['./local-photo.component.css']
})
export class LocalPhotoComponent implements OnInit {

  localImage: string = null;
  photo: Photo;

  constructor(private service: SaveFileService) { }

  ngOnInit(): void {}

  onFileSelect(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (ev) => {
    this.localImage = reader.result.toString();
    this.photo = {title: file.name, imagePath: this.localImage}
    }
  }
  onFormSubmit() {
    if (!this.photo) {
      alert('Please fill valid details!');
      return false;
    }  
    this.service.sendPhotoToServer(this.photo);
    this.discardPhoto();
  }
  discardPhoto() {
    this.localImage = null;
  }
}