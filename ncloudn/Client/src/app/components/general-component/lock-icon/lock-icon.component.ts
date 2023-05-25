import { Component, OnInit } from '@angular/core';
import { PrivacyService } from 'src/app/service/general/privacy/privacy.service';

@Component({
  selector: 'app-lock-icon',
  templateUrl: './lock-icon.component.html',
  styleUrls: ['./lock-icon.component.css']
})
export class LockIconComponent implements OnInit {

  constructor(private privacy: PrivacyService) { }

  className() {
    return this.privacy.isOnPrivateMode ? "hidden" : "fa fa-lock";
  }

  ngOnInit(): void {
  }



}
