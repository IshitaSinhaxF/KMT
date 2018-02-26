import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpulishedArticlesComponent } from './unpulished-articles.component';

describe('UnpulishedArticlesComponent', () => {
  let component: UnpulishedArticlesComponent;
  let fixture: ComponentFixture<UnpulishedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpulishedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpulishedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
