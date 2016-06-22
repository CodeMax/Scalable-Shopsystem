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
import { ArticleInventoryComponent } from './articleInventory.component';

@Component({
    selector: 'as-test',
    template: '<div><as-articleInventory></as-articleInventory></div>',
    directives: [ArticleInventoryComponent]
})
class TestComponent {
}

describe('ArticleInventoryComponent', () => {
    it('should have print "Article" on template', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('p'))
                .toHaveText('ArticleInventory');
        });
    })));
});
