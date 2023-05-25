import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import * as _ from 'lodash';
import { SaveFileService } from 'src/app/service/general/send-photos-to-server/send-photos-to-server';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.component.html',
  styleUrls: ['./take-photo.component.css']
})
export class TakePhotoComponent implements OnInit {

  webcamImage: WebcamImage = null;
  photoName: String;
  route: any;

  constructor (    
    private service: SaveFileService
    ) { }

  ngOnInit(): void {
  }

  private trigger: Subject<void> = new Subject<void>();
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
   }
  triggerSnapshot(): void {
    this.trigger.next();
   }
   
  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
   }

  saveSnapshot(): void {
    console.info('saving webcam image', this.webcamImage);
    this.service.sendPhotoToServer({title: this.photoName || new Date().toString(), imagePath: this.webcamImage.imageAsDataUrl});
    this.discardSnapShot();
  }
  discardSnapShot() {
    this.webcamImage = null;
  }
}

