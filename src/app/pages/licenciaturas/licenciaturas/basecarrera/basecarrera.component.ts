import { Component, Input } from '@angular/core';
import { LicmnuComponent } from '../../components/licmnu/licmnu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basecarrera',
  imports: [CommonModule],
  templateUrl: './basecarrera.component.html',
  styleUrl: './basecarrera.component.scss'
})
export class BasecarreraComponent {
  @Input() carrera="";
  @Input() introCarrera="";
  @Input() perfilAspirante="";
  @Input() aprendizaje="";
  @Input() perfilEgresado="";
  @Input() empleabilidad="";

}
