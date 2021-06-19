import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaDigitalInicioComponent } from './cuenta-digital-inicio.component';

describe('CuentaDigitalInicioComponent', () => {
  let component: CuentaDigitalInicioComponent;
  let fixture: ComponentFixture<CuentaDigitalInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaDigitalInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaDigitalInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
