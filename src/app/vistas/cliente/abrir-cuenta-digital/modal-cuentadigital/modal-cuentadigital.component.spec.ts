import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCuentadigitalComponent } from './modal-cuentadigital.component';

describe('ModalCuentadigitalComponent', () => {
  let component: ModalCuentadigitalComponent;
  let fixture: ComponentFixture<ModalCuentadigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCuentadigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCuentadigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
