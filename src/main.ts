import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HostModule } from './app/host.module';


platformBrowserDynamic().bootstrapModule(HostModule)
  .catch(err => console.error(err));
