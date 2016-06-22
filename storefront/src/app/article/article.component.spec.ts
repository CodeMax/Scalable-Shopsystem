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
import { ArticleComponent } from './article.component';

@Component({
    selector: 'as-test',
    template: '<div><as-article></as-article></div>',
    directives: [ArticleComponent]
})
class TestComponent {
}

describe('ArticleComponent', () => {
    it('should have print "Article" on template', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('p'))
                .toHaveText('Article');
        });
    })));
});
