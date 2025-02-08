import { Component } from '@angular/core';
import { BottommenuComponent } from '../bottommenu/bottommenu.component';
import { SocialnetworksComponent } from '../socialnetworks/socialnetworks.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [ BottommenuComponent, SocialnetworksComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent {

}
