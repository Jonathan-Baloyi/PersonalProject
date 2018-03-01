import { NgModule } from '@angular/core';
import { SubjectComponent } from './subject/subject.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { SubjectService, ValuesService } from '../../services';
import { AddSubjectComponent } from './subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './subject/edit-subject/edit-subject.component';

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
  ],
  providers: [
    SubjectService,
    ValuesService,
    MatIconRegistry,
    MatError,
    MatChipInput,
    MatChipRemove],

  declarations: [SubjectComponent, AddSubjectComponent, EditSubjectComponent],

  exports: [  CommonModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
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
    MatDialogModule,
    MatSlideToggleModule]
})
export class SchoolModule { }
