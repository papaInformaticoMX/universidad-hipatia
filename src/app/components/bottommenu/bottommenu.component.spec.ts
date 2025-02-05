import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottommenuComponent } from './bottommenu.component';

describe('BottommenuComponent', () => {
  let component: BottommenuComponent;
  let fixture: ComponentFixture<BottommenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottommenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottommenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
