import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodecambioComponent } from './tipodecambio.component';

describe('TipodecambioComponent', () => {
  let component: TipodecambioComponent;
  let fixture: ComponentFixture<TipodecambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodecambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodecambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
