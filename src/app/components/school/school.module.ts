import { NgModule } from '@angular/core';
import { SubjectComponent } from './subject/subject.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  // DateAdapter,
  // MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatIconRegistry,
  MatTableModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatError,
  MatChipInput,
  MatChipRemove,
  MatTabsModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import {
  SubjectService,
  ValuesService,
  ClassLevelService,
  GradesService,
  StudentsService,
  TeachersService,
  TestTypeService
} from '../../services';
import { AddSubjectComponent } from './subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './subject/edit-subject/edit-subject.component';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassComponent } from './class/class.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { AddClassLevelComponent } from './class/add-class-level/add-class-level.component';
import { EditClassLevelComponent } from './class/edit-class-level/edit-class-level.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { AddAssesmentComponent } from './assesment/add-assesment/add-assesment.component';
import { EditAssesmentComponent } from './assesment/edit-assesment/edit-assesment.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { GradesComponent } from './grades/grades.component';
import { AddGradesComponent } from './grades/add-grades/add-grades.component';
import { EditGradesComponent } from './grades/edit-grades/edit-grades.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule,
    RouterModule,
    MatTabsModule,
  ],
  providers: [
    ClassLevelService,
    GradesService,
    StudentsService,
    SubjectService,
    TeachersService,
    TestTypeService,
    ValuesService,
    MatIconRegistry,
    MatError,
    MatChipInput,
    MatChipRemove],

  declarations: [SubjectComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    StudentComponent,
    TeacherComponent,
    ClassComponent,
    AssesmentComponent,
    AddClassLevelComponent,
    EditClassLevelComponent,
    AddStudentComponent,
    EditStudentComponent,
    AddAssesmentComponent,
    EditAssesmentComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    GradesComponent,
    AddGradesComponent,
    EditGradesComponent
  ],

  exports: [CommonModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
    MatSlideToggleModule]
})
export class SchoolModule { }
