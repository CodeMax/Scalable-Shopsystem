import {
    it,
    inject,
    async,
    describe,
    expect
} from '@angular/core/testing';
import {
    TestComponentBuilder
} from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { LoginComponent } from './login.component';

@Component({
    selector: 'as-test',
    template: '<div><as-login></as-login></div>',
    directives: [LoginComponent]
})
class TestComponent {
}

describe('LoginComponent', () => {
    it('should have print "Login" on template', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('p'))
                .toHaveText('Login');
        });
    })));
});
