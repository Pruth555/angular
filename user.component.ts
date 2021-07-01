import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  email : string = "";
  username ='';
  password = '';
  constructor() { }

  ngOnInit(): void {

  }
    // Check user for authenticatoin
    checkLogin() {
      console.log("Login done")

    }
  loginsubmit(){
    console.log("Login done")
  }

}
