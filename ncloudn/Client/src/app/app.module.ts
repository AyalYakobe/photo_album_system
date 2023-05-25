import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgmCoreModule} from "@agm/core";

import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/general-component/main-general/app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MapsComponent } from './components/general-component/maps/maps.component';
import { ChoosePhotoComponent } from './components/choose-photo/choose-photo-main/choose-photo-main.component';
import { TakePhotoComponent } from './components/choose-photo/take-photo/take-photo.component'
import {WebcamModule} from 'ngx-webcam';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocalPhotoComponent } from './components/choose-photo/local-photo/local-photo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamburgerMenuComponent } from './components/general-component/hamburger-menu/hamburger-menu.component';
import { ProfileIconComponent } from './components/general-component/profile-icon/profile-icon.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LockIconComponent } from './components/general-component/lock-icon/lock-icon.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
import { RandomPhotoComponent } from './components/random-photo/random-photo.component';

@NgModule({

  declarations: [
    AppComponent,
    WelcomeComponent,
    MapsComponent,
    ChoosePhotoComponent,
    TakePhotoComponent,
    LocalPhotoComponent,
    HamburgerMenuComponent,
    ProfileIconComponent,
    AboutUsComponent,
    LockIconComponent,
    GalleryComponent,
    EditPhotoComponent,
    RandomPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwJKgxzbObDUBj4FtMOE3kjvTL_h0j-HU',
      libraries: ['places']
    }),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


