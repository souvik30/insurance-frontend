import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';
import { RegisterService } from 'src/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  admin=new Admin();

  constructor(private register:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  registerAdmin(){
    //console.log(this.admin);
    this.admin.created_by=<string>localStorage.getItem("name");
    //console.log(this.admin);
    this.register.registerAdmin(this.admin).subscribe(
      data => {
        this.router.navigate(['/dashboard']);
      },
      error => {
        //console.log(error);
      }
    );}

}
