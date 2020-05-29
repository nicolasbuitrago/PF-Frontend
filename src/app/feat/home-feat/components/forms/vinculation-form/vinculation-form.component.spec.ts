import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculationFormComponent } from './vinculation-form.component';

describe('VinculationFormComponent', () => {
  let component: VinculationFormComponent;
  let fixture: ComponentFixture<VinculationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
