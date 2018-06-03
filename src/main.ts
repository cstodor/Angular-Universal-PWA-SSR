import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
      // Regsiters Service Worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('ngsw-worker.js');
      }
    })
    .catch(err => console.log(err));
});
