import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonhoverComponent } from './buttonhover.component';

describe('ButtonhoverComponent', () => {
  let component: ButtonhoverComponent;
  let fixture: ComponentFixture<ButtonhoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonhoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonhoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
