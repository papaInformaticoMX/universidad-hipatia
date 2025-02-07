import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaturasswipeComponent } from './licenciaturasswipe.component';

describe('LicenciaturasswipeComponent', () => {
  let component: LicenciaturasswipeComponent;
  let fixture: ComponentFixture<LicenciaturasswipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenciaturasswipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciaturasswipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
