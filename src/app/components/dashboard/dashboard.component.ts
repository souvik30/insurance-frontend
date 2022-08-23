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
    //console.log("this is my token "+token);
    this.userNameDisplay = localStorage.getItem("name");
  }



}
