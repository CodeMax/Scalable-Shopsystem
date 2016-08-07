import {
    it,
    expect,
    beforeEachProviders,
    inject,
    async,
    describe,
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { DeliveryComponent } from './delivery.component';

@Component({
    directives: [DeliveryComponent]
})
class TestComponent {
}

describe('DeliveryComponent', () => {

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
