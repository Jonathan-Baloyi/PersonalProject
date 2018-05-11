import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './components/school/subject/subject.component';
import { EditSubjectComponent } from './components/school/subject/edit-subject/edit-subject.component';
import { AddSubjectComponent } from './components/school/subject/add-subject/add-subject.component';
import { StudentComponent } from './components/school/student/student.component';
import { TeacherComponent } from './components/school/teacher/teacher.component';
import { ClassComponent } from './components/school/class/class.component';
import { AssesmentComponent } from './components/school/assesment/assesment.component';
import { AddClassLevelComponent } from './components/school/class/add-class-level/add-class-level.component';
import { EditClassLevelComponent } from './components/school/class/edit-class-level/edit-class-level.component';
import { EditTeacherComponent } from './components/school/teacher/edit-teacher/edit-teacher.component';
import { AddTeacherComponent } from './components/school/teacher/add-teacher/add-teacher.component';
import { EditAssesmentComponent } from './components/school/assesment/edit-assesment/edit-assesment.component';
import { AddAssesmentComponent } from './components/school/assesment/add-assesment/add-assesment.component';
import { GradesComponent } from './components/school/grades/grades.component';
import { AddGradesComponent } from './components/school/grades/add-grades/add-grades.component';
import { EditGradesComponent } from './components/school/grades/edit-grades/edit-grades.component';

const routes: Routes = [
  { path: '', redirectTo: '/subjects', pathMatch: 'full' },
  { path: 'subjects', component: SubjectComponent },
  { path: 'subject/add', component: AddSubjectComponent  },
  { path: 'subject/:id', component: EditSubjectComponent  },

  { path: 'students', component: StudentComponent  },
  { path: 'student/add', component: AddClassLevelComponent },
  { path: 'student/:id', component: EditSubjectComponent },

  { path: 'teachers', component: TeacherComponent  },
  { path: 'teacher/add', component: AddTeacherComponent },
  { path: 'teacher/:id', component: EditTeacherComponent },

  { path: 'classes', component: ClassComponent  },
  { path: 'class/add', component: AddClassLevelComponent },
  { path: 'class/:id', component: EditClassLevelComponent },

  { path: 'assesments', component: AssesmentComponent  },
  { path: 'assesment/add', component: AddAssesmentComponent },
  { path: 'assesment/:id', component: EditAssesmentComponent },

  { path: 'grades', component: GradesComponent },
  { path: 'grade/add', component: AddGradesComponent },
  { path: 'grade/:id', component: EditGradesComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
