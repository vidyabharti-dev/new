import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkingUserPass({ uname, pass }: { uname: string; pass: string; }){

  if(uname == "admin" && pass == "123"){
     localStorage.setItem("uname","admin");
     localStorage.setItem("pass","123");
     console.log("auth service");
     return true;
  }
  else{
    return false;
  }

  }


}
