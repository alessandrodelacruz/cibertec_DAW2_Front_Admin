import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudprestamoComponent } from './solicitudprestamo.component';

describe('SolicitudprestamoComponent', () => {
  let component: SolicitudprestamoComponent;
  let fixture: ComponentFixture<SolicitudprestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudprestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
