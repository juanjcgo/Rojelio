import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatesComponent } from './edit-cates.component';

describe('EditCatesComponent', () => {
  let component: EditCatesComponent;
  let fixture: ComponentFixture<EditCatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
