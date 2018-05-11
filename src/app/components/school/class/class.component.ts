import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { Subjects } from '../../../models';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ClassLevelService } from '../../../services';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  displayedColumns = ['name', 'edit', 'delete'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private classLevelService: ClassLevelService, private router: Router) { }



  ngOnInit() {

    this.loadSubjects();
  }

  loadSubjects() {
    this.classLevelService.ApiClassGet().subscribe( x => {
        this.dataSource = new MatTableDataSource(x);
        this.dataSource.paginator = this.paginator;
    });
  }

  add() {
    this.router.navigate(['class/add']);
  }

  edit(id: number) {
    this.router.navigate(['class', id ]);
  }
  delete(id: number) {
    this.classLevelService.ApiClassByIdDelete(id).subscribe(x => {
        this.loadSubjects();
    });
  }
}
