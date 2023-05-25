import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { 
  }

  goBackToWelcome() {
  this.router.navigateByUrl("");
  }
  goToChoosePhoto() {
    this.router.navigateByUrl("choose-photo");
  }
  goToTakePhoto() {
    this.router.navigateByUrl("take-photo");
  }
  goToLocalPhoto() {
    this.router.navigateByUrl("local-photo");
  }
  goToAboutUs() {
    this.router.navigateByUrl("about-us");
  }
  goToGallery() {
    this.router.navigateByUrl("gallery");
    console.log("gall2")
  }
  goToEditPhoto(id) {
    this.router.navigateByUrl(`edit-photo/${id}`);
  }
  goToRandomPhoto() {
    this.router.navigateByUrl("random-photo");
  }
}
