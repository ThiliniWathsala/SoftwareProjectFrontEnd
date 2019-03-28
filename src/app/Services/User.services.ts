import { User } from '../models/User'; // import user class

export class UserServices{
    user: User ={  // create user objrct to retrieve data
        id:"1",
        userName:"Thilini Wathsala",
        fname:"Thilini",
        lname:"Wathsala",
        position:"Software Architecht",
        aboutme:"abc",
        contacts:["0710372906","0715794395"], // to give many contact numbers
        address:{       // create address object
            no:"10",
            street:"Sudarshana road",
            city:"Malambe"      
            },
        email:"o.t.wathsala@gmail.com"

    }

    getUser(id:String):User {
        return this.user;
    }


    
}