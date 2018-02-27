import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftArticleComponent } from './draft-article.component';

describe('DraftArticleComponent', () => {
  let component: DraftArticleComponent;
  let fixture: ComponentFixture<DraftArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
