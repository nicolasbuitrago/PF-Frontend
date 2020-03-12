import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImgBgComponent } from './section-img-bg.component';

describe('SectionImgBgComponent', () => {
  let component: SectionImgBgComponent;
  let fixture: ComponentFixture<SectionImgBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionImgBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionImgBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
