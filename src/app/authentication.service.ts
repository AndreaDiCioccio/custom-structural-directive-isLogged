import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    user$:BehaviorSubject<string> = new BehaviorSubject(null)

    login(): void{
        this.user$.next('paperino')
    }

    logout(): void {
        this.user$.next(null)
    }

    get isLogged$(): Observable<Boolean> {
        return this.user$.pipe( 
            map( user => user && !!user)
        )
    }

}
