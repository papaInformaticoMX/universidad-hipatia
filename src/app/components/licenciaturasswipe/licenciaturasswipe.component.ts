import { Component } from '@angular/core';
import { SwippeComponent } from '../swippe/swippe.component';
import { SlideComponent } from '../swippe/slide/slide.component';


@Component({
  selector: 'app-licenciaturasswipe',
  imports: [SwippeComponent, SlideComponent],
  templateUrl: './licenciaturasswipe.component.html',
  styleUrl: './licenciaturasswipe.component.scss'
})
export class LicenciaturasswipeComponent {

}
