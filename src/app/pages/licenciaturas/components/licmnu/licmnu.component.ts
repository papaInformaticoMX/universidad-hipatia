import { Component, OnInit } from '@angular/core';
import { LicenciaturasEnum } from '../../enums/licenciaturas.enum';
import { CommonModule } from '@angular/common';
import { LicenciaturasRoutesModule } from '../../licenciaturas.routes.module';

@Component({
  selector: 'app-licmnu',
  imports: [CommonModule, LicenciaturasRoutesModule],
  templateUrl: './licmnu.component.html',
  styleUrl: './licmnu.component.scss'
})
export class LicmnuComponent {
  licenciaturasEnum = LicenciaturasEnum;
}
