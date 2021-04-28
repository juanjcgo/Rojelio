import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCatesComponent } from './form-cates.component';

describe('FormCatesComponent', () => {
  let component: FormCatesComponent;
  let fixture: ComponentFixture<FormCatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
