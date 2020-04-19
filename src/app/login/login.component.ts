import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  msg;
  constructor(private authService:AuthService,private routes:Router) { }
 

  ngOnInit() {
  }
  submit(uname:string,p:string){
   var output=this.authService.checkingUserPass({ uname, pass: p });
   if(output==true){
     console.log("yes login ts");
     this.msg="success";
     alert(this.msg);
    this.routes.navigate([`/dashboard`]);
   }
else{
  
  this.msg="invalid uname";
  alert(this.msg);

}
  }

}
