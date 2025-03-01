import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-modalidades-estudios',
  imports: [MatCardModule],
  templateUrl: './modalidades-estudios.component.html',
  styleUrl: './modalidades-estudios.component.scss'
})
export class ModalidadesEstudiosComponent {
    @Input() presencial = true;
    @Input() hibrida = true;
    @Input() enlinea = true;
    @Input() ejecutiva = true;
}
