import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    userName:"",
    password:""
  }

 InvalidLogin = '';
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.userName!='' && this.credentials.password!='' ) && (this.credentials.userName!=null && this.credentials.password!=null)){
      // authentication Jwt
      console.log("form server");
      this.loginservice.generateToken(this.credentials.userName,this.credentials.password).subscribe(
        (resp:any)=>{
          console.log(resp);
          localStorage.setItem("token",resp.authToken)
          localStorage.setItem("userName",this.credentials.userName);
          this.loginservice.loginUser(resp.authToken)
          window.location.href="/dashboard"
        },
        error=>{
          console.log(error);
          this.InvalidLogin = "Please Enter Valid Login Id or Password";

        }
      )
         
    }
    else{
      console.log("fields are empty");
    }
  }



}
