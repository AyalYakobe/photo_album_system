import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/service/routing/routing.service';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit {

  private isOpened: Boolean;

  constructor(private route: RoutingService) { }

  ngOnInit(): void {
  }

  profileMenu = ['Show Images in List / Table', 'Start Random Slideshow'];
  profileMenuDisabled = ['Switch Mode to Import / Observe Images','Share Images', 'Sync With Cloud Storage']

  onClickMenu() {
    this.isOpened = !this.isOpened;
  }
  menuChange() {
    return this.isOpened ? "change" : "";
  }

  onClickMenuItem(menuItem) {
    switch (menuItem) {
        case 'Start Random Slideshow':
          this.route.goToRandomPhoto();
          break;
      default:
        break;
    }
  }
}
