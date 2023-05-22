import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-stu-form',
  templateUrl: './stu-form.component.html',
  styleUrls: ['./stu-form.component.css']
})
export class StuFormComponent {
  name: string = ""
  rollno: string = ""
  branch: string = ""
  year: string = ""
  appstu = new AppComponent();
  data: any = {}
  constructor(private stuform: AppComponent) { }
  async onSubmit() {
    console.log(this.name, this.rollno, this.year, this.branch)

    this.data = {
      name: this.name,
      rollno: this.rollno,
      branch: this.branch,
      year: this.year,
    }
    fetch("http://localhost:2002/stuform/student", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.data)
    }).then((res) => {
      console.log(res.status);

    }).catch((err) => {
      console.log(err);
    })

  }

  close() {

  }


}
