import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  imports: [ CommonModule, RouterLink],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.scss',
  standalone: true
})
export class MainmenuComponent {

}
