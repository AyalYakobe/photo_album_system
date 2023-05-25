import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/service/routing/routing.service';

@Component({
  selector: 'app-choose-photo',
  templateUrl: './choose-photo-main.component.html',
  styleUrls: ['./choose-photo-main.component.css']
})
export class ChoosePhotoComponent implements OnInit {

  constructor(private route: RoutingService) { }

  ngOnInit(): void {
  }

  goToTakePhoto() {
    this.route.goToTakePhoto();
  }
  goToLocalPhoto() {
    this.route.goToLocalPhoto();
  }
  goToGallery() {
    this.route.goToGallery();
  }
  goBackToWelcome() {
    this.route.goBackToWelcome();
  }
}
