import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDevComponent } from './product-dev.component';

describe('ProductDevComponent', () => {
  let component: ProductDevComponent;
  let fixture: ComponentFixture<ProductDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
