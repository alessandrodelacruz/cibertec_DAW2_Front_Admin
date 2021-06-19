import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTipodecambioComponent } from './modal-tipodecambio.component';

describe('ModalTipodecambioComponent', () => {
  let component: ModalTipodecambioComponent;
  let fixture: ComponentFixture<ModalTipodecambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTipodecambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTipodecambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
