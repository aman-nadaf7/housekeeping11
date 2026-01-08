import { bootstrapApplication } from '@angular/platform-browser';
import { Header } from './app/header/header';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

  export const appConfig: ApplicationConfig = {
      providers: [
      provideRouter(routes), 
      provideHttpClient(withFetch()),
      provideAnimationsAsync(),
      providePrimeNG({
          theme: { preset: Aura, options: { darkModeSelector: '.p-dark' } },
      }),
    ],
  };
    bootstrapApplication(App, appConfig).catch((err) =>
    console.error(err)
);



