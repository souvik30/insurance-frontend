import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL=environment.URL;
  constructor(private http:HttpClient) { }

  generateToken(email:string,password:string){
    return this.http.post(this.URL+"login",{email,password},{responseType: 'json'});
  }

  //for login user
  // storing token in localstorage

  loginUser(token:any){
    sessionStorage.setItem("token",token)
    return true;
  }

  // to check user is logged in or not
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }

  // for log out
  logout(){
    localStorage.removeItem("token")
    return true;
  }

  // to get the token
  getToken(){
    return localStorage.getItem("token");
  }
}
