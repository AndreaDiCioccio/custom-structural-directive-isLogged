import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

    @Component({
    selector: 'app-root',
    template: `
        <h1>custom structural directive isLogged</h1>
        <div *appIsLogged>
            <button (click)="authService.logout()">Logout</button>
            <h3>user: {{authService.user$ | async}}</h3>
        </div>
        <div *appIsNotLogged>
            <button (click)="authService.login()">Login</button>
        </div>
    `
    })
export class AppComponent {

    constructor(public authService:AuthenticationService) {}

}
