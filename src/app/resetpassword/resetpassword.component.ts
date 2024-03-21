import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  visible:boolean=true
  changetype:boolean=true
  resetform!: FormGroup;
  errormessage ={usernameerror : false, emailerror: false}
  viewpass(){
    this.visible=!this.visible
    this.changetype=!this.changetype
  }

  constructor(private _fb: FormBuilder,private http : HttpClient,private route : Router,private userservice : UserService) { }


  // registerUser(user: any){
  //   console.log(user)

    ngOnInit(){
     this.resetform=this._fb.group({
     password:["",[Validators.required]],
     confirmpassword : ["",[Validators.required]]})
     }
    submission(){
      this.userservice.updatepassword(this.resetform.value.password)
      
      this.route.navigate(["login"])
}

}
