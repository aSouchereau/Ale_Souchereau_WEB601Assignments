import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Required by stackblitz
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone.js';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
