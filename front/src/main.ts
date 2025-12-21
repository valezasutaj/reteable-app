import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RateablesComponent } from './app/components/rateables/rateables.component';

bootstrapApplication(RateablesComponent, appConfig)
  .catch((err) => console.error(err));
