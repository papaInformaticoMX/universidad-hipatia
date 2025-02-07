import { Component } from '@angular/core';
import { SlidersComponent } from '../../components/sliders/sliders.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LicenciaturasswipeComponent } from '../../components/licenciaturasswipe/licenciaturasswipe.component';

@Component({
  selector: 'app-home',
  imports: [SlidersComponent, MatButtonModule, MatIconModule, MatDividerModule, LicenciaturasswipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
