import { Component, OnInit, Renderer2 } from '@angular/core';
import { RoutingService } from 'src/app/service/routing/routing.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  private isOpened: Boolean;
  private isLight: Boolean = true;
  closeResult = '';
  

  constructor(private toggle: Renderer2, private route: RoutingService, private modalService: NgbModal) { 
  }

  ngOnInit(): void {
  }

  hamburgerArray = ['Application Theme - Light / Dark', 'About Us'];

  onClickMenuItem(menuItem) {
    switch (menuItem) {
      case 'Application Theme - Light / Dark': 
      this.isLight = !this.isLight;
      let added, removed;
      if(this.isLight){
        added = "light";
        removed = "dark";
      } else {
        added = "dark";
        removed = "light";
      }
      this.toggle.addClass(document.body, added);
      this.toggle.removeClass(document.body, removed);
        break;
        
      case 'About Us':
        this.route.goToAboutUs();
        break;
      default:
        break;
    }
  }

  onClickMenu() {
    this.isOpened = !this.isOpened;
  }
  menuChange() {
    return this.isOpened ? "change" : "";
  }
}