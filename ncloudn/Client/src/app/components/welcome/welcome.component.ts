import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/service/routing/routing.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: RoutingService) { }

  ngOnInit(): void {
  }

  goToTakePhoto() {
    this.route.goToTakePhoto();
  }
}
