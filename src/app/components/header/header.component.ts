import { Component } from '@angular/core';
import { MainmenuComponent } from "../mainmenu/mainmenu.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-header',
  imports: [MainmenuComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {

}
