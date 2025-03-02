import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  imports: [ CommonModule, RouterModule, RouterLink],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.scss',
  standalone: true
})
export class MainmenuComponent {

}
