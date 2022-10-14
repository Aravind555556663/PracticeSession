import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fname = '';
  public lname = '';
  public dob = '';
  
  public firstName ="";
  public lastName = "";
  public dateOfBirth = "";
  

  clicked()
  {
    this.firstName = this.fname;
    this.lastName = this.lname
    this.dateOfBirth = this.dob;
  }
}
