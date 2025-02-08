import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwippeComponent } from './swippe.component';

describe('SwippeComponent', () => {
  let component: SwippeComponent;
  let fixture: ComponentFixture<SwippeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwippeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwippeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
