import { Directive, OnDestroy, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Directive({
    selector: '[appIsNotLogged]'
})
export class IsNotLoggedDirective implements OnInit, OnDestroy{

    unsubscribe:Subject<boolean>

    constructor(private authService:AuthenticationService,
                private view:ViewContainerRef,
                private template:TemplateRef<any>) { }

    ngOnInit(): void {
        this.authService.isLogged$.subscribe( (isLogged:boolean) => {
            !isLogged ? this.view.createEmbeddedView(this.template) : this.view.clear()
        })
    }

    ngOnDestroy(): void {
        this.unsubscribe.next(true)
    }

}
