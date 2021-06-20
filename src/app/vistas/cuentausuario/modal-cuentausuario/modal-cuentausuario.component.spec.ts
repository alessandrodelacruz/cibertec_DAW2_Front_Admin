import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCuentausuarioComponent } from './modal-cuentausuario.component';

describe('ModalCuentausuarioComponent', () => {
  let component: ModalCuentausuarioComponent;
  let fixture: ComponentFixture<ModalCuentausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCuentausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCuentausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
