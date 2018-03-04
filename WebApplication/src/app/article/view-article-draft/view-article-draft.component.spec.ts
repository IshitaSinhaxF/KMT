import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleDraftComponent } from './view-article-draft.component';

describe('ViewArticleDraftComponent', () => {
  let component: ViewArticleDraftComponent;
  let fixture: ComponentFixture<ViewArticleDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArticleDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArticleDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
