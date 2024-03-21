import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = "ZEKSTA";
  auth: boolean=true;;

  constructor(public userService:UserService){
    console.log(this.userService)
    
  }
  ngOnInit(){
    

}
submit(e: any){
  console.log(e);
  this.userService.logout();
}

}
