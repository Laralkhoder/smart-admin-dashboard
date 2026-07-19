import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    providePrimeNG({
      license:
        'eyJpZCI6IjlkZjFhNzVkLWRmYjktNDc2NC04NGFhLTU4NGM1MGI0N2JjMSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODQ0NjYyNjMsImV4cCI6MTgxNjAwMjI2M30.bWObO8W5qPrFe7vX6puTG_lV7SpP_bIMPkYr9X-DGF0M7X621r2VAtFMb_NxvmbhqKC2bTYMdwDFrjf4apcxBA',
      theme: {
        preset: Aura,
      },
    }),
  ],
};
