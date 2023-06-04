import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProductsComponent } from './current-products.component';

describe('CurrentProductsComponent', () => {
  let component: CurrentProductsComponent;
  let fixture: ComponentFixture<CurrentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
