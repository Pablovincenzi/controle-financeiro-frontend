import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/appComponent';
import { appConfig } from './app/appModule';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
