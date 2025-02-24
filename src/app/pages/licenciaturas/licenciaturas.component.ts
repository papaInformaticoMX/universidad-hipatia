import { Component } from '@angular/core';
import { LicmnuComponent } from './components/licmnu/licmnu.component';
import { LicenciaturasEnum } from './enums/licenciaturas.enum';
import { CommonModule } from '@angular/common';
import { LicenciaturasRoutesModule } from './licenciaturas.routes.module';

@Component({
  selector: 'app-licenciaturas',
  imports: [
         LicmnuComponent,
         CommonModule,
         LicenciaturasRoutesModule],  
  templateUrl: './licenciaturas.component.html',
  styleUrl: './licenciaturas.component.scss'
})
export class LicenciaturasComponent {
  licenciaturasEnum = LicenciaturasEnum;
}
