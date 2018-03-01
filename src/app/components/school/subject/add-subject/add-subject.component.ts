import { Component, OnInit } from '@angular/core';
import { Subjects } from '../../../../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../../../../services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subject: Subjects = {};

  constructor(private router: Router, private subjectService: SubjectService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.subjectService.ApiSubjectsPost(this.subject).subscribe(x => {
      f.reset();
    });
  }

  backToSubjects() {
      this.router.navigate(['/subjects']);
  }

}
