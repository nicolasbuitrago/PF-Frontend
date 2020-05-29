import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlogComponent } from './text-blog.component';

describe('TextBlogComponent', () => {
  let component: TextBlogComponent;
  let fixture: ComponentFixture<TextBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
