import { ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Photo } from 'src/app/models/photo';

@Injectable({
  providedIn: 'root'
})

export class SaveFileService {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fileUploadForm = this.formBuilder.group({
      uploadedImage: ['']
    });
  }
  localImage: string = null;

  sendPhotoToServer(formData: Photo) {
    this.http
      .post<any>('http://localhost:3000/uploaded-photo', formData).subscribe(response => {
        console.log(response);
        alert("Image Uploaded Successfully!")
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
    }
    updateDataBase(formData: Photo) {
      this.http
      .post<any>('http://localhost:3000/update', formData).subscribe(response => {
        console.log(response);
        alert("Image Updated Successfully!")
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
    }
}