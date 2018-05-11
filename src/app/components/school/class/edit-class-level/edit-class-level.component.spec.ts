import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassLevelComponent } from './edit-class-level.component';

describe('EditClassLevelComponent', () => {
  let component: EditClassLevelComponent;
  let fixture: ComponentFixture<EditClassLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
