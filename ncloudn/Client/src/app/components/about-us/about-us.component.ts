import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/service/routing/routing.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private route: RoutingService) { }

  ngOnInit(): void {
  }

  goBackToWelcome() {
    this.route.goBackToWelcome();
  }

}
