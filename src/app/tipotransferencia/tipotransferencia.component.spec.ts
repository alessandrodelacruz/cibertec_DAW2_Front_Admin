import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipotransferenciaComponent } from './tipotransferencia.component';

describe('TipotransferenciaComponent', () => {
  let component: TipotransferenciaComponent;
  let fixture: ComponentFixture<TipotransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipotransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipotransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
