import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaOtrascuentaComponent } from './transferencia-otrascuenta.component';

describe('TransferenciaOtrascuentaComponent', () => {
  let component: TransferenciaOtrascuentaComponent;
  let fixture: ComponentFixture<TransferenciaOtrascuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaOtrascuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaOtrascuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
