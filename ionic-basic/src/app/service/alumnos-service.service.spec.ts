import { TestBed } from '@angular/core/testing';

import { AlumnoService } from './alumnos-service.service';

describe('AlumnosServiceService', () => {
  let service: AlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
