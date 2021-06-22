import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrestamoComponent } from './modal-prestamo.component';

describe('ModalPrestamoComponent', () => {
  let component: ModalPrestamoComponent;
  let fixture: ComponentFixture<ModalPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
