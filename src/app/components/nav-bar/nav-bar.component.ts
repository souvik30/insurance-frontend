import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isCollapsed = true;
  userNameDisplay:string | null | undefined;
  public loggedIn=false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    this.userNameDisplay = localStorage.getItem("name");

  }

  logoutUser(){
    //console.log("logout pressed");
    this.loginService.logout()
    location.reload()
  }
}
