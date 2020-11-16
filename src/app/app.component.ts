import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

    @Component({
    selector: 'app-root',
    template: `
    <h1>custom structural directive isLogged</h1>
        <div *appIsLogged #il="isLogged">
            <button (click)="authService.logout()">Logout</button>
        </div>
        <div *ngIf="!il.isLogged">
            <button (click)="authService.login('paperino')">Login</button>
        </div>
    `
    })
export class AppComponent {

    constructor(public authService:AuthenticationService) {}

}
