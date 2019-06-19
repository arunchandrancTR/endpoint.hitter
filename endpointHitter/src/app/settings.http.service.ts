import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { Settings } from './settings';

@Injectable({ providedIn: 'root' })
export class SettingsHttpService {

    constructor(private http: HttpClient, private settingsService: SettingsService) { }

    fetchSettings(): Promise<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Cache-Control': 'no-cache'
            })
        };

        return new Promise(
            (resolve) => {
                this.http.get('assets/settings.json', httpOptions)
                    .toPromise()
                    .then(response => {
                        this.settingsService.settings = <Settings>response;
                        console.info(this.settingsService.settings);
                        resolve();
                    });
            }
        );
    }
}
