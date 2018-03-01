import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SubjectService } from '../../../../services/subject.service';
import { Subjects } from '../../../../models';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  subjects: any;
  subject: Subjects = {};
  subjectId: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
  private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = this.route.params.subscribe(params => {
      this.subjectId = +params['id'];
      this.subjectService.ApiSubjectsByIdGet(this.subjectId).subscribe(x => {
          this.subject = x;
      });
    });
  }

  onSubmit(f: NgForm) {
    this.subjectService.ApiSubjectsByIdPut({id: this.subjectId, subjects: this.subject} ).subscribe( x => {
      this.subject = x;
    });
  }

  backToSubjects() {
    this.router.navigate(['/subjects']);
}

  }
