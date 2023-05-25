import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrivacyService {

  isOnPrivateMode: boolean = false;
  
  constructor() { 
  }

  usersArray: {username: string, password: string;}[] = [{ username: "Ayal", password: "12345" }];
  
}
