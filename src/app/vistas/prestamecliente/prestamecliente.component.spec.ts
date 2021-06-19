import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestameclienteComponent } from './prestamecliente.component';

describe('PrestameclienteComponent', () => {
  let component: PrestameclienteComponent;
  let fixture: ComponentFixture<PrestameclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestameclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestameclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
