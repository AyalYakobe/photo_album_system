import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePhotoComponent } from './choose-photo-main.component';

describe('ChoosePhotoComponent', () => {
  let component: ChoosePhotoComponent;
  let fixture: ComponentFixture<ChoosePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
