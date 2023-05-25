import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChoosePhotoComponent } from './components/choose-photo/choose-photo-main/choose-photo-main.component';
import { TakePhotoComponent } from './components/choose-photo/take-photo/take-photo.component';
import { LocalPhotoComponent } from './components/choose-photo/local-photo/local-photo.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
import { RandomPhotoComponent } from './components/random-photo/random-photo.component';

const routes: Routes = [ 
  {path:"",component:WelcomeComponent},
  {path:"choose-photo",component:ChoosePhotoComponent},
  {path:"take-photo",component:TakePhotoComponent},
  {path:"local-photo",component:LocalPhotoComponent},
  {path: "about-us", component:AboutUsComponent},
  {path: "gallery", component:GalleryComponent},
  {path: `edit-photo/:id`, component:EditPhotoComponent},
  {path: `random-photo`, component:RandomPhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
