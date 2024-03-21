import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  hide = true;

  loginform!: FormGroup;
  errormessages = false;
  constructor(private _userprovider : UserService,private _fb:FormBuilder,private _router : Router){
  }
  ngOnInit(){

    this.loginform=this._fb.group({
      emailorphonenumber : ['',Validators.required],
      password : ['',Validators.required]
    }
    
    
    
    )
  }
  
  async submission(){
    await this._userprovider.login(this.loginform.value);
   
    // console.log(this.loginform);
    // await this._userprovider.Check(this.loginform.value).subscribe((e : any)=>{
    //   console.log(e)
      if(this._userprovider.authorized){
        this._router.navigate(["home"]);
  }
      else{
       this.errormessages =true
       
    //   }

    //  })
    
    // if(this._userprovider.authorized){
    //   console.log("1");
    //   this._router.navigate(["categories"]);
    // }
    
    
  }


}
}
