import { Component, OnInit } from '@angular/core';
import { ClassLevel } from '../../../../models';
import { Router } from '@angular/router';
import { ClassLevelService } from '../../../../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-class-level',
  templateUrl: './add-class-level.component.html',
  styleUrls: ['./add-class-level.component.css']
})
export class AddClassLevelComponent implements OnInit {

  classLevel: ClassLevel = {};

  constructor(private router: Router, private classLevelService: ClassLevelService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.classLevelService.ApiClassPost(this.classLevel).subscribe(x => {
      f.reset();
    });
  }

  backToSubjects() {
      this.router.navigate(['/classes']);
  }
}
