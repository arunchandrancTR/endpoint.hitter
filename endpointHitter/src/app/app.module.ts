import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsHttpService } from './settings.http.service';
import { SettingsService } from './settings.service';
import { Settings } from './settings';
import { HttpClientModule } from '@angular/common/http';

export function fetchSettings(settingsService: SettingsHttpService) {
  return () => settingsService.fetchSettings();
}

const settingsFactory = (settingsService: SettingsService) => {
  return settingsService.settings;
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [  { provide: APP_INITIALIZER, useFactory: fetchSettings, deps: [SettingsHttpService], multi: true },
  { provide: Settings, useFactory: settingsFactory, deps: [SettingsService] }],  
  bootstrap: [AppComponent]
})
export class AppModule { }
