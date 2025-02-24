import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicmnuComponent } from './licmnu.component';

describe('LicmnuComponent', () => {
  let component: LicmnuComponent;
  let fixture: ComponentFixture<LicmnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicmnuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicmnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
