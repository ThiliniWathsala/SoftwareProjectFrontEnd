import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  isContactDetailsEditableDisabled=true;// control disable property in contact details
  //@ViewChild("contactListt") contactList:ElementRef; // to refer each element
  


  constructor(private userService:UserServices) { }

  PersonDetailsEditButtonClick(event){     //used to edit person details
    return this.isPersonDetailsEditableDisabled=false;
  }

  ContactDetailsEditableDisabled(event){    //used to edit contact detail
    return this.isContactDetailsEditableDisabled=false;

  }

  addNewContact(event){
     const addNewContact= prompt("Enter number");
     this.user.contacts.push(addNewContact);


  }

  ngOnInit() {
    this.user= this.userService.getUser("1"); 
  }

}
