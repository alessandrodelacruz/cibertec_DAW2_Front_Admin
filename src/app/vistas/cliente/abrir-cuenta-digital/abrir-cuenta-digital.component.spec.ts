import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirCuentaDigitalComponent } from './abrir-cuenta-digital.component';

describe('AbrirCuentaDigitalComponent', () => {
  let component: AbrirCuentaDigitalComponent;
  let fixture: ComponentFixture<AbrirCuentaDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirCuentaDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirCuentaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
