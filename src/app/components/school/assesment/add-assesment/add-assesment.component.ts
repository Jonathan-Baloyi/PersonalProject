import { Component, OnInit } from '@angular/core';
import { TestType, Subjects } from '../../../../models';
import { Router } from '@angular/router';
import { TestTypeService, SubjectService } from '../../../../services';
import { NgForm, FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {MatTableDataSource, MatIconRegistry} from '@angular/material';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-add-assesment',
  templateUrl: './add-assesment.component.html',
  styleUrls: ['./add-assesment.component.css']
})
export class AddAssesmentComponent implements OnInit {
  assesment: TestType = {};
  SubjectsFiltered: Observable<string[]>;
  subjectsCtrl: FormControl = new FormControl();
  subjectOptions = [];
  subjectList: Subjects[] = [];
  subject = '';
  the_subject: TestType;

  constructor(private router: Router,
     private testTypeService: TestTypeService,
    private subjectService: SubjectService) { }

  ngOnInit() {
    this.loadSubjects();
  }

  loadFilteredSubjects() {
    this.SubjectsFiltered = this.subjectsCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterSubjects(val))
      );
  }

  private loadSubjects() {
    this.subjectService.ApiSubjectGet().subscribe(results => {
      this.subjectList = results;

      results.forEach(subjectName => {
          this.subjectOptions.push(subjectName.name);
        }
      );
      this.loadFilteredSubjects();
    }, err => {

    });
  }

  onSubmit(f: NgForm) {

    this.the_subject = this.subjectList.find(x => x.name === this.subject);

    if (this.the_subject) {
      this.assesment.subjectId = this.the_subject.id;
    } else {
      this.assesment.subjectId = null;
    }
    debugger;
    this.testTypeService.ApiTestTypePost(this.assesment).subscribe(x => {
      debugger;
      f.reset();
    });
  }

  filterSubjects(val: string): string[] {
    return this.subjectOptions.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  backToSubjects() {
      this.router.navigate(['/assesments']);
  }
}
