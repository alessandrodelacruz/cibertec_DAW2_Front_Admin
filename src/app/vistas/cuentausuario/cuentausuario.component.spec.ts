import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentausuarioComponent } from './cuentausuario.component';

describe('CuentausuarioComponent', () => {
  let component: CuentausuarioComponent;
  let fixture: ComponentFixture<CuentausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
