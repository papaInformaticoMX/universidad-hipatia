import { Component, Input } from '@angular/core';
import { LicmnuComponent } from '../../components/licmnu/licmnu.component';
import { CommonModule } from '@angular/common';
import { ModalidadesEstudiosComponent } from '../../components/modalidades-estudios/modalidades-estudios.component';
import { CompromisoEducativoComponent } from '../../components/compromiso-educativo/compromiso-educativo.component';
import { InscribirteboxComponent } from '../../../../components/inscribirtebox/inscribirtebox.component';

@Component({
  selector: 'app-basecarrera',
  imports: [CommonModule, ModalidadesEstudiosComponent, CompromisoEducativoComponent, InscribirteboxComponent],
  templateUrl: './basecarrera.component.html',
  styleUrl: './basecarrera.component.scss'
})
export class BasecarreraComponent {
  @Input() carrera = "";
  @Input() introCarrera = "";
  @Input() perfilAspirante = "";
  @Input() aprendizaje = "";
  @Input() perfilEgresado = "";
  @Input() empleabilidad = "";

}
