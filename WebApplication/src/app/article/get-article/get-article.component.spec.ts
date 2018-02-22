import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArticleComponent } from './get-article.component';

describe('GetArticleComponent', () => {
  let component: GetArticleComponent;
  let fixture: ComponentFixture<GetArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
