import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)},
    { path:'nosotros', loadComponent: () => import('./pages/nosotros/nosotros.component').then(mod => mod.NosotrosComponent)},
    { path:'licenciaturas', loadComponent: () => import('./pages/licenciaturas/licenciaturas.component').then(mod => mod.LicenciaturasComponent)},
    { path:'contactanos', loadComponent: () => import('./pages/contactanos/contactanos.component').then(mod => mod.ContactanosComponent)},
    { path:'visitanos',loadComponent: () => import('./pages/visitanos/visitanos.component').then(mod => mod.VisitanosComponent)},
    { path:'aviso-de-privacidad',loadComponent: () => import('./pages/aviso-privacidad/aviso-privacidad.component').then(mod => mod.AvisoPrivacidadComponent)},
    { path:'terminos-y-condiciones',loadComponent: () => import('./pages/terminos-condiciones/terminos-condiciones.component').then(mod => mod.TerminosCondicionesComponent)},
    { path:'preguntas-frecuentes',loadComponent: () => import('./pages/preguntas-frecuentes/preguntas-frecuentes.component').then(mod => mod.PreguntasFrecuentesComponent)}
];
