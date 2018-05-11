import { Component, OnInit } from '@angular/core';
import { ClassLevel } from '../../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassLevelService } from '../../../../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-class-level',
  templateUrl: './edit-class-level.component.html',
  styleUrls: ['./edit-class-level.component.css']
})
export class EditClassLevelComponent implements OnInit {

  classLevels: any;
  classLevel: ClassLevel = {};
  classId: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
  private classLevelService: ClassLevelService) { }

  ngOnInit() {
    this.classLevels = this.route.params.subscribe(params => {
      this.classId = +params['id'];
      this.classLevelService.ApiClassByIdGet(this.classId).subscribe(x => {
          this.classLevel = x;
      });
    });
  }

  onSubmit(f: NgForm) {
    this.classLevelService.ApiClassByIdPut({id: this.classId, ClassLevels: this.classLevel} ).subscribe( x => {
      this.classLevel = x;
    });
  }

  backToSubjects() {
    this.router.navigate(['/classes']);
}

}
