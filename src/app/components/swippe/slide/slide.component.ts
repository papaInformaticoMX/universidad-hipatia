import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slide',
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {
  @Input() titulo = '';
  @Input() imagen = '';
  @Input() link ='';
}
