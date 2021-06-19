import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrevisualizacionComponent } from './modal-previsualizacion.component';

describe('ModalPrevisualizacionComponent', () => {
  let component: ModalPrevisualizacionComponent;
  let fixture: ComponentFixture<ModalPrevisualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrevisualizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrevisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
