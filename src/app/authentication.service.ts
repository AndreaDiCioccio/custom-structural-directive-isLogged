import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    user$:BehaviorSubject<string> = new BehaviorSubject(null)

    login(username:string): void{
        username === 'paperino' ? this.user$.next('paperino') : null
    }

    logout(): void {
        this.user$.next(null)
    }

    get isLogged$(): Observable<Boolean> {
        console.log('get isLogged$')
        return this.user$.pipe( 
            map( user => user && !!user)
        )
    }

}
