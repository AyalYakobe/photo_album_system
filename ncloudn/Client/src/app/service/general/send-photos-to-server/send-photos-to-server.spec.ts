import { TestBed } from '@angular/core/testing';

import { SaveFileService } from './send-photos-to-server';

describe('SaveFileService', () => {
  let service: SaveFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
