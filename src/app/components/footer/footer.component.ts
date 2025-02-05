import { Component } from '@angular/core';
import { BottommenuComponent } from '../bottommenu/bottommenu.component';

@Component({
  selector: 'app-footer',
  imports: [ BottommenuComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent {

}
