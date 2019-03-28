import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserServices } from '../Services/User.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    user:User // user variable and User is type

  isPersonDetailsEditableDisabled=true; // used to control disable property in personal details

  


  constructor(private userService:UserServices) { }

  PersonDetailsEditButtonClick(event){
    return this.isPersonDetailsEditableDisabled=false;
  }

  ngOnInit() {
    this.user= this.userService.getUser("1"); 
  }

}
