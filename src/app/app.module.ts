import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
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
  MatTableModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatError,
  MatTabsModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import { ApplicationManagementModule } from './components/application-management/application-management.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ApplicationManagementModule,
    MatTabsModule
  ],
  providers: [ApiConfiguration],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule,
    MatTabsModule,
    ApplicationManagementModule,
    HttpClientModule,
  ]
})
export class AppModule { }
