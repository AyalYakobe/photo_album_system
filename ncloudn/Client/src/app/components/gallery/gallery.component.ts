import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { GetPhotosFromServerService } from 'src/app/service/general/get-photos-from-server/get-photos-from-server.service';
import { PrivacyService } from 'src/app/service/general/privacy/privacy.service';
import { RoutingService } from 'src/app/service/routing/routing.service';
import { ProfileIconComponent } from '../general-component/profile-icon/profile-icon.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  album: Photo[];
  onPrivateMode: Boolean = false;
  onFaveriotsMode: Boolean = false;
  isList: Boolean;

  constructor(private service: GetPhotosFromServerService, private route: RoutingService, private privacy: PrivacyService, private toggle: Renderer2) { }

  ngOnInit(): void {
    if(this.onPrivateMode == false && this.onFaveriotsMode == false) {
      console.log("1");
      this.publicGallery();
    } else if (this.onPrivateMode == true && this.onFaveriotsMode == false){
      console.log("2");
      this.allGallery()
    } else if (this.onFaveriotsMode == true && this.onPrivateMode == false) {
      console.log("3");
      this.faveriotsGallery();
    } else {
      this.privateFaveriotsGallery();
      console.log("4");
    }
  }

  publicGallery() {
    console.log("public gallery called");
    this.service.recieveOnlyPublicGallery().subscribe(response => {
      console.log(response);
      this.album = response;
    }, er => {
      console.log(er);
      alert(er.error.error);
    });
  }
  allGallery() {
    console.log("all gallery called");
    this.service.recieveAllGallery().subscribe(response => {
      console.log(response);
      this.album = response;
    }, er => {
      console.log(er);
      alert(er.error.error);
    });
  }
  faveriotsGallery() {
    this.service.recieveOnlyFaveriotsGallery().subscribe(response => {
      console.log(response);
      this.album = response;
    }, er => {
      console.log(er);
      alert(er.error.error);
    });
  }
  privateFaveriotsGallery() {
    this.service.recievePrivateFaveriotsGallery().subscribe(response => {
      console.log(response);
      this.album = response;
    }, er => {
      console.log(er);
      alert(er.error.error);
    });
  }
  searchByCategories(category: String) {
    if(this.onPrivateMode) {
      this.service.recieveAllCategoriesGallery(category).subscribe(response => {
        console.log(response);
        this.album = response;
        if(this.album.length == 0){
          alert("No such category exists.")
        }
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
    }
    else {
      this.service.recieveLimitedCategoriesGallery(category).subscribe(response => {
        console.log(response);
        this.album = response;
        if(this.album.length == 0){
          alert("No such category exists.")
        }
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
    }
  }

  goToEditPhoto(id) {
    this.route.goToEditPhoto(id);
  }

  privateModeCheck(password: String) {
    this.onPrivateMode = !this.onPrivateMode;
    if(this.onPrivateMode) {
      if(password == this.privacy.usersArray[0].password) {
        this.privacy.isOnPrivateMode = true;
        this.ngOnInit();
        alert("You can now access all material");
      } else {
        this.privacy.isOnPrivateMode = false;
      }
    } else {
      this.privacy.isOnPrivateMode = false;
      alert("You are now viewing material available to the public");
      this.ngOnInit();
    }
  }
  faveriotModeCheck() {
    this.onFaveriotsMode = !this.onFaveriotsMode;
    if(this.onFaveriotsMode) {
      this.ngOnInit();
      alert("You are on 'faveriots' mode");
    } else {
      alert("You are on 'all' mode");
      this.ngOnInit();
    }
  }
}
