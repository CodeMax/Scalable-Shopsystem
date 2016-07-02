import {
    it,
    expect,
    beforeEachProviders,
    inject,
    async,
    describe,
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { Component } from '@angular/core';
import { LogoutComponent } from './logout.component';

@Component({
    directives: [LogoutComponent]
})
class TestComponent {
}

describe('LogoutComponent', () => {
    beforeEachProviders(() => [
        ROUTER_FAKE_PROVIDERS
    ]);

    it('should have brand Angular 2 Starter', async(inject([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
            tsb.createAsync(TestComponent).then((fixture) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
                expect(compiled.querySelector('a.navbar-brand'))
                    .toHaveText('Angular 2 Starter');
            });
        })));
});
