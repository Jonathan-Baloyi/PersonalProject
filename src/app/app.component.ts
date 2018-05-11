import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [{ path: '/subjects', label: 'Subjects' },
  { path: '/classes', label: 'Classes' },
  { path: '/teachers', label: 'Teachers' },
  { path: '/students', label: 'Students' },
  { path: '/assesments', label: 'Assesments' },
  { path: '/grades', label: 'Grades' },
  ];
  title = 'app';
}
