import { StuFormComponent } from './../stu-form/stu-form.component';
import { Component } from '@angular/core';
import { StudataService } from '../studata.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public studata: any[] = []

  newdata: any

  constructor(private stu: StudataService) {
    this.loadData()


  }
  async loadData() {
    this.studata = await this.stu.getData()

  }

  edit(e: any, name: string, rollno: string, branch: string, year: string) {
    console.log(e.target)


  }
  delete(e: any) {

  }


}

