import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesEstudiosComponent } from './modalidades-estudios.component';

describe('ModalidadesEstudiosComponent', () => {
  let component: ModalidadesEstudiosComponent;
  let fixture: ComponentFixture<ModalidadesEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalidadesEstudiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadesEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
