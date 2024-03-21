import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  passwordotp : number=0;
  user!: User;
  users: Array<User>=[{email : "madhu@gmail.com",phonenumber: 1234567890, password : "madhu12345"}]
  authorized : boolean = false;
  client : any;
  UserObject:any;
  passchangeuser:any;

  




  constructor(private http : HttpClient){
    // const { MongoClient } = require("mongodb");
    //  const uri ="mongodb+srv://user:root@cluster0.7h4sn3h.mongodb.net/?retryWrites=true&w=majority";
    //   this.client = new MongoClient(uri);
  }



  async login(u : any){
    const filteredusers=this.users.filter((e)=>{ return ((e.email==u.emailorphonenumber || e.phonenumber==u.emailorphonenumber)  && e.password==u.password)});
    console.log(filteredusers);
    if(filteredusers.length>0){
      this.authorized=true;
      this.user={email : filteredusers[0].email,phonenumber:filteredusers[0].phonenumber,password : filteredusers[0].password};
    }
  }
  logout()
{
  this.user={email : " ",phonenumber:0, password : " "};
  this.authorized=false;
}
  registeruser(userdata : any){
    this.users.push({
      email: userdata.email,
      phonenumber: userdata.phonenumber,
      password: userdata.password
    })
    console.log(this.users)
  }
  getotp(){
    this.passwordotp=Math.floor(Math.random() * 10000);
    return this.passwordotp;

  }
  checkotp(otp : number){
    return this.passwordotp==otp
  }
  updatepassword(newpassword:string){
    const filteredusers=this.users.filter((e)=>{ return (e.email==this.passchangeuser)});
    filteredusers[0].password=newpassword;
  }
 
}
