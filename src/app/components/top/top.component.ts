import { Component } from '@angular/core';
import { SocialnetworksComponent } from "../socialnetworks/socialnetworks.component";
import { CallusComponent } from '../callus/callus.component';

@Component({
  selector: 'app-top',
  imports: [SocialnetworksComponent, CallusComponent],

  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
  standalone: true
})
export class TopComponent {

}
