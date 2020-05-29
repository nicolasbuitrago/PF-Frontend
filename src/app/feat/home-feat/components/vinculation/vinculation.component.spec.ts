import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculationComponent } from './vinculation.component';

describe('VinculationComponent', () => {
  let component: VinculationComponent;
  let fixture: ComponentFixture<VinculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
