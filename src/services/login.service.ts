import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL=environment.AuthURL;
  VAL_URL=environment.MemberURL;
  constructor(private http:HttpClient) { }

  generateToken(userid:string,password:string){
    return this.http.post(this.URL+"login",{userid,password},{responseType: 'json'});
  }

  //for login user
  // storing token in localstorage

  loginUser(token:any){
    sessionStorage.setItem("token",token)
    return true;
  }
  
  tokenIsValid(){
    return this.http.get(this.VAL_URL+"validate",{responseType: 'json'});

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
    localStorage.removeItem("token"),
    localStorage.removeItem("name"),
    localStorage.removeItem("email")
    return true;
  }

  // to get the token
  getToken(){
    return localStorage.getItem("token");
  }
}
