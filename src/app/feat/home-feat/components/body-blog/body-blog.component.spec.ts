import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBlogComponent } from './body-blog.component';

describe('BodyBlogComponent', () => {
  let component: BodyBlogComponent;
  let fixture: ComponentFixture<BodyBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
