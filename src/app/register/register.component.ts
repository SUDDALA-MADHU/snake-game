import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  visible:boolean=true
  changetype:boolean=true
  registrationform!: FormGroup;
  errormessage ={usernameerror : false, emailerror: false}
  viewpass(){
    this.visible=!this.visible
    this.changetype=!this.changetype
  }

  constructor(private _fb: FormBuilder,private http : HttpClient,private route : Router,private userservice : UserService) { }


  // registerUser(user: any){
  //   console.log(user)

    ngOnInit(){
     this.registrationform=this._fb.group({
     phonenumber:["",[Validators.compose([Validators.required,Validators.pattern("[0-9]{10}")])]],
     email : [" ",Validators.compose([Validators.minLength(4), Validators.required])],
     password:["",[Validators.required]],
     confirmpassword : ["",[Validators.required]]})
     }
    submission(){
      this.userservice.registeruser(this.registrationform.value);
      this.route.navigate(["login"])
}
}
