import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../models/User';
import { UserServices } from '../Services/User.services';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    user:User //  cteate User type  object variable

  isPersonDetailsEditableDisabled=true; // used to control disable property in personal details
  isContactDetailsEditableDisabled=true;// control disable property in contact details
  islogintDetailsEditableDisabled=true;
  errormsg1;            // check password changes
  errormsg2;
  errormsg3;
  errormsgEnable1=true;
  errormsgEnable2=true;
  errormsgEnable3=true;
  i:number;
  count=0;
 addNewContact;
  //@ViewChild("contactListt") contactList:ElementRef; // to refer each element
  


  constructor(private userService:UserServices) {  }// inject the object (must need to pass the object through the constructors because of the injection)

  PersonDetailsEditButtonClick(event){     //used to edit person details
    return this.isPersonDetailsEditableDisabled=false;
  }
  changePersonalDetails(event){ // personal details save change
    return this.isPersonDetailsEditableDisabled=true;

    //write the method to send data to data base

  }

  ContactDetailsEditableDisabled(event){    //used to edit contact detail
    return this.isContactDetailsEditableDisabled=false;

  }

  changeContactlDetails(event){   // contact detals save change
    return this.isContactDetailsEditableDisabled=true;

    //write the method to send data to data base

  }



  addNewContacts(event){ 
        
      this.addNewContact= prompt("Enter number");      // used to add new contatc using msg box
        
     for(this.i=0;this.i<this.addNewContact.length;this.i++){  
      if((this.addNewContact.charAt(this.i)>=0 ) || (this.addNewContact.charAt(this.i)<=9) ){  //check numbers
          this.count++;
      } else{
      alert("number is invalid");
    }
  }

   // limit number of contacts
  if(this.count===10){                                    //check amount of numbers
      if(this.user.contacts.length<3){                    // check array size
      this.user.contacts.push(this.addNewContact);
    }
    else{
      alert("you can only save 3 contact numbers");
    }
  }

  else{
     alert("number is invalid");
  }

  this.count=0;                              //set count=0 again 
}



  loginDetailsEdit(event){   // edit login details
    this.islogintDetailsEditableDisabled=false;

  }


  ngOnInit() {
    this.user= this.userService.getUser("1"); 
  }


  checkPassword(){

    if (this.user.currentPassword===this.user.password){
     this.errormsgEnable1=true;
     this.checkPasswordlength();  // call methos to check length of password
    }

  else{
      this. errormsgEnable1=false;
      this.errormsg1="error : password is incorrect";
    }
 }


  checkPasswordlength(){
    if((this.user.newpassword).length>=8){
      this.errormsgEnable2=true;
      this.checkConfirmPassword();  // call methos to check confirmation password
     }

    else{
    this. errormsgEnable2=false;
    this.errormsg2="error : Characters are less than 8";
    }

}

checkConfirmPassword(){
  
  if(this.user.repassword===this.user.newpassword){
      this.errormsgEnable3=true;
      this.user.password===this.user.newpassword;
      this.islogintDetailsEditableDisabled=true;

    setTimeout(() => {
     alert("password changed");
    }, 1000);
   }
else{
    this. errormsgEnable3=false;
    this.errormsg3="error : comfirm password does not match with new password";
  }


}



}
