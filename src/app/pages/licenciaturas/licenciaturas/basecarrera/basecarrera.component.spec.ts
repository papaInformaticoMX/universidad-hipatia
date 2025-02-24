import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecarreraComponent } from './basecarrera.component';

describe('BasecarreraComponent', () => {
  let component: BasecarreraComponent;
  let fixture: ComponentFixture<BasecarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasecarreraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasecarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
