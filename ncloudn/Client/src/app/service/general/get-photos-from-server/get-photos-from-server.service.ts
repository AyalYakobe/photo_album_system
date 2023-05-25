import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosFromServerService {

  constructor(private http: HttpClient) { }

  recieveAllGallery() {
    return this.http.get<Photo[]>('http://localhost:3000/gallery');
  }
  recieveOnlyPublicGallery() {
    return this.http.get<Photo[]>('http://localhost:3000/get-public-gallery');
  }
  recieveOnlyFaveriotsGallery() {
    return this.http.get<Photo[]>('http://localhost:3000/get-faveriots-gallery');
  }
  recievePrivateFaveriotsGallery() {
    return this.http.get<Photo[]>('http://localhost:3000/get-private-faveriots-gallery');
  }
  recieveAllCategoriesGallery(category) {
    return this.http.get<Photo[]>(`http://localhost:3000/get-all-categories-gallery?category=${category}`);
  }
  recieveLimitedCategoriesGallery(category) {
    return this.http.get<Photo[]>(`http://localhost:3000/get-limited-categories-gallery?category=${category}`);
  }

  recieveFoundPhotoFromServer(id) {
    return this.http.get<Photo>(`http://localhost:3000/get-photo-by-id?id=${id}`);
  }
}
