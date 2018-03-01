import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './components/school/subject/subject.component';
import { EditSubjectComponent } from './components/school/subject/edit-subject/edit-subject.component';
import { AddSubjectComponent } from './components/school/subject/add-subject/add-subject.component';

const routes: Routes = [
  { path: '', redirectTo: '/subjects', pathMatch: 'full' },
  { path: 'subjects', component: SubjectComponent },
  { path: 'subject/add', component: AddSubjectComponent  },
  { path: 'subject/:id', component: EditSubjectComponent  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
