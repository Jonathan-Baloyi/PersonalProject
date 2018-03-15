import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './components/school/subject/subject.component';
import { EditSubjectComponent } from './components/school/subject/edit-subject/edit-subject.component';
import { AddSubjectComponent } from './components/school/subject/add-subject/add-subject.component';
import { StudentComponent } from './components/school/student/student.component';
import { TeacherComponent } from './components/school/teacher/teacher.component';
import { ClassComponent } from './components/school/class/class.component';
import { AssesmentComponent } from './components/school/assesment/assesment.component';

const routes: Routes = [
  { path: '', redirectTo: '/subjects', pathMatch: 'full' },
  { path: 'subjects', component: SubjectComponent },
  { path: 'subject/add', component: AddSubjectComponent  },
  { path: 'subject/:id', component: EditSubjectComponent  },
  { path: 'students', component: StudentComponent  },
  { path: 'teachers', component: TeacherComponent  },
  { path: 'classes', component: ClassComponent  },
  { path: 'assesments', component: AssesmentComponent  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
