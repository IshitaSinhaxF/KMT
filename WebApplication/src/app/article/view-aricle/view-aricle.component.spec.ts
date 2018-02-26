import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAricleComponent } from './view-aricle.component';

describe('ViewAricleComponent', () => {
  let component: ViewAricleComponent;
  let fixture: ComponentFixture<ViewAricleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAricleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
