import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmotp',
  templateUrl: './confirmotp.component.html',
  styleUrl: './confirmotp.component.css'
})
export class ConfirmotpComponent {
  otpform!: FormGroup;
  errormessages = false;
  constructor(private _userprovider : UserService,private _fb:FormBuilder,private _router : Router){
  }
  ngOnInit(){

    this.otpform=this._fb.group({
      otp : ['',Validators.required]
    })


}
submission(){
  if(this._userprovider.checkotp(this.otpform.value.otp)){
    this._router.navigate(["/resetpassword"]);
  }

}
}
