export class User{ // to create user objects (User is only a class not a component)
id:String;
userName:String;
fname:String;
lname:String;
position:String;
aboutme:String;
contacts:String[]; // to give many contact numbers
address:{       // create address object
    no:String;
    street:String;
    city:String;
};
email:String;
username:String;
currentPassword:String;
password:String;
newpassword:String;
repassword:String;

}