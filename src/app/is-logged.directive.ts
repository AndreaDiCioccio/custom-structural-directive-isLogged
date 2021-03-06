import { AuthenticationService } from './authentication.service';
import { Directive, OnInit, ViewContainerRef, TemplateRef, OnDestroy } from '@angular/core';
import { Subject, of } from 'rxjs';

@Directive({
    selector: '[appIsLogged]'
})
export class IsLoggedDirective implements OnInit, OnDestroy{

    unsubscribe:Subject<boolean>

    constructor(private authService:AuthenticationService,
                private view:ViewContainerRef,
                private template:TemplateRef<any>) { }

    ngOnInit(): void {
        this.authService.isLogged$.subscribe( (isLogged:boolean) => {
            isLogged ? this.view.createEmbeddedView(this.template) : this.view.clear()
        })
    }

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
    }

}
