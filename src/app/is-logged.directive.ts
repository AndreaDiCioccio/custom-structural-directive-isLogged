import { AuthenticationService } from './authentication.service';
import { Directive, OnInit, ViewContainerRef, TemplateRef, OnDestroy } from '@angular/core';
import { Subject, of } from 'rxjs';
import { takeUntil, catchError, distinctUntilChanged } from 'rxjs/operators'

@Directive({
    selector: '[appIsLogged]',
    exportAs: 'isLogged'
})
export class IsLoggedDirective implements OnInit, OnDestroy{

    public isLogged:boolean
    unsubscribe:Subject<boolean>

    constructor(private authService:AuthenticationService,
                private view:ViewContainerRef,
                private template:TemplateRef<any>) { }

    ngOnInit(): void {
        console.log('direttiva')
        this.authService.isLogged$.subscribe( (isLogged:boolean) => {
            console.log('isLogged', isLogged)
            this.isLogged = isLogged
            isLogged == true ? this.view.createEmbeddedView(this.template) : this.view.clear()
        })
    }

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
    }

}
