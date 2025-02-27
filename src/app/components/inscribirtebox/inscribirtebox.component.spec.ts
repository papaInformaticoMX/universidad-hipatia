import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirteboxComponent } from './inscribirtebox.component';

describe('InscribirteboxComponent', () => {
  let component: InscribirteboxComponent;
  let fixture: ComponentFixture<InscribirteboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscribirteboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscribirteboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
