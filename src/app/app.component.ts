import { Component } from '@angular/core';
import { StuFormComponent } from './stu-form/stu-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stuenable: boolean = false;
  data: string = "hello"

  addStudent() {
    console.log("Add Button invoked")
    this.stuenable = true;
    console.log(this.stuenable)
  }
}

