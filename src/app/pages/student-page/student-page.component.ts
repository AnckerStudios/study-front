import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IStudent } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  student?:IStudent;
  error?: string;
  private readonly destroy$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ){}

  ngOnInit(): void {
    this.getStudent();
  }
  
  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
    .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data)=> {
          this.student = data;
        },
        error: (e)=>{
          this.error='404'
        }
      });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
