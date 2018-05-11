import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssesmentComponent } from './edit-assesment.component';

describe('EditAssesmentComponent', () => {
  let component: EditAssesmentComponent;
  let fixture: ComponentFixture<EditAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
