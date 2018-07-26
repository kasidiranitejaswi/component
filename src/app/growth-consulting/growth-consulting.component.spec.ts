import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthConsultingComponent } from './growth-consulting.component';

describe('GrowthConsultingComponent', () => {
  let component: GrowthConsultingComponent;
  let fixture: ComponentFixture<GrowthConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
