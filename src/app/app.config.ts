import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {

  providers: [provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes), provideAnimationsAsync(), provideClientHydration(withEventReplay())]
};
