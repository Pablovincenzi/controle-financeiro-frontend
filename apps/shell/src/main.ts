import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appComponentConfig } from './app/app.component.config';

bootstrapApplication(AppComponent, appComponentConfig).catch((err) =>
  console.error(err)
);
