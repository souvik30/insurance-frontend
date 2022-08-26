import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userNameDisplay:string | null | undefined;

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    let token = this.loginservice.getToken();
    let valid=this.loginservice.tokenIsValid().subscribe(
      (valid:any) => {
        if (valid.status!=200) {
            console.log('invalid token');
            this.loginservice.logout();
            location.reload();
          }
        else {
          console.log('valid token');
          }
        });
    // if(valid) {
    //   this.loginservice.logout();
    // }
    //console.log("this is my token "+token);
    this.userNameDisplay = localStorage.getItem("name");
  }



}
