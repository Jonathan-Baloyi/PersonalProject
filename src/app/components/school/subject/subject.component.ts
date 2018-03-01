import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { Subjects } from '../../../models';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  displayedColumns = ['name', 'code', 'action'];
  dataSource;
  constructor(private subjectService: SubjectService, private router: Router) { }


  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectService.ApiSubjectsGet().subscribe( x => {
        this.dataSource = new MatTableDataSource(x);
    });
  }

  add() {
    this.router.navigate(['subject/add']);
  }

  edit(id: number) {
    this.router.navigate(['subject', id ]);
  }
  delete(id: number) {
    this.subjectService.ApiSubjectsByIdDelete(id).subscribe(x => {
        this.loadSubjects();
    });
  }

}
