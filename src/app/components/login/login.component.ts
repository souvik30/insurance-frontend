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
    email:"",
    password:""
  }

 InvalidLogin = '';
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.email!='' && this.credentials.password!='' ) && (this.credentials.email!=null && this.credentials.password!=null)){
      // authentication Jwt
      console.log("form server");
      this.loginservice.generateToken(this.credentials.email,this.credentials.password).subscribe(
        (resp:any)=>{
          console.log(resp);
          localStorage.setItem("token",resp.token)
          localStorage.setItem("email",this.credentials.email);
          localStorage.setItem("name",resp.user.name);
          this.loginservice.loginUser(resp.token)
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
