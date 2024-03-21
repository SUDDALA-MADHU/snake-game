import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  hide = true;

  loginform!: FormGroup;
  errormessages = false;
  constructor(private _userprovider : UserService,private _fb:FormBuilder,private _router : Router,){
  }
  ngOnInit(){

    this.loginform=this._fb.group({
      email : ['',Validators.compose([Validators.required,Validators.email])]
    })

}
  async submission(){
  let response = await emailjs.send("service_iysrqg4","template_xlf9gec",{
    to_name : this.loginform.value.email,
    otp_number : this._userprovider.getotp(),
    to_email : this.loginform.value.email
    
  },
  "9OGkxyBnE5VoEkeSa"

  );
  this._userprovider.passchangeuser=this.loginform.value.email;
  this._router.navigate(["confirmotp"])
  console.log(response);






}

}
