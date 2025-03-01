import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisoEducativoComponent } from './compromiso-educativo.component';

describe('CompromisoEducativoComponent', () => {
  let component: CompromisoEducativoComponent;
  let fixture: ComponentFixture<CompromisoEducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompromisoEducativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompromisoEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
