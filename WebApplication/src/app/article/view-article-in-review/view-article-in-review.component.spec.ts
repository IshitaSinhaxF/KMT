import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleInReviewComponent } from './view-article-in-review.component';

describe('ViewArticleInReviewComponent', () => {
  let component: ViewArticleInReviewComponent;
  let fixture: ComponentFixture<ViewArticleInReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArticleInReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArticleInReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
