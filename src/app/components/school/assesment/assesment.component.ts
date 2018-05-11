import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { Subjects, TestType } from '../../../models';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ClassLevelService, TestTypeService } from '../../../services';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  displayedColumns = ['name', 'subject', 'dateWritten', 'duration' , 'total', 'edit'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private testTypeService: TestTypeService, private router: Router) { }

  ngOnInit() {

    this.loadSubjects();
  }

  loadSubjects() {
    this.testTypeService.ApiTestTypeGet().subscribe( x => {
        this.dataSource = new MatTableDataSource(x);
        this.dataSource.paginator = this.paginator;
    });
  }

  add() {
    this.router.navigate(['assesment/add']);
  }

  edit(id: number) {
    this.router.navigate(['assesment', id ]);
  }
  delete(id: number) {
    this.testTypeService.ApiTestTypeByIdDelete(id).subscribe(x => {
        this.loadSubjects();
    });
  }
}
