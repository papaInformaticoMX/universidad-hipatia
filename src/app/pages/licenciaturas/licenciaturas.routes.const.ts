import { Routes } from '@angular/router';
import { LicenciaturasComponent } from './licenciaturas.component';

export const LicenciaturasRoutesConst: Routes = [
{
  path:'', component: LicenciaturasComponent,
  children:[
    {
        path: 'contaduria',
        loadComponent: () => import('./licenciaturas/contaduria/contaduria.component').then(a => a.ContaduriaComponent),
    },
    { 
      path:'', 
      redirectTo: 'contaduria',
      pathMatch: 'full' 
    },
    {
      path: 'derecho',
      loadComponent: () => import('./licenciaturas/derecho/derecho.component').then(a => a.DerechoComponent),
    },
    {
      path: 'enfermeria',
      loadComponent:()=>import('./licenciaturas/enfermeria/enfermeria.component').then(a => a.EnfermeriaComponent),
    },
    {
      path: 'informatica',
      loadComponent:()=>import('./licenciaturas/informatica/informatica.component').then(a => a.InformaticaComponent),
    },
    {
      path: 'odontologia',
      loadComponent:()=>import('./licenciaturas/odontologia/odontologia.component').then(a => a.OdontologiaComponent),
    },
    {
      path: 'seguridad',
      loadComponent:()=>import('./licenciaturas/seguridad/seguridad.component').then(a => a.SeguridadComponent),
    }
   
  ]

}
 
];
