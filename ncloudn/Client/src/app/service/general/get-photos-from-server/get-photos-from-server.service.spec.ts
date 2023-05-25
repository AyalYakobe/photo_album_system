import { TestBed } from '@angular/core/testing';

import { GetPhotosFromServerService } from './get-photos-from-server.service';

describe('GetPhotosFromServerService', () => {
  let service: GetPhotosFromServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPhotosFromServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
