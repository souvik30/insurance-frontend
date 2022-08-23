import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MasterTableService } from 'src/services/master-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  departmentList:any;
  member=new Member();
  noDataFound='';
  Data:any;
  constructor(private memberService:MasterTableService, private router:Router) { }

  ngOnInit(): void {
    this.memberService.getDepartment().subscribe(
      res=>{
        this.Data=res;
        this.departmentList=this.Data.data;
        //console.log(this.departmentList);
        if(this.departmentList=='' || this.departmentList==null) {
          this.noDataFound="No Department Found";
        }
      },
      error=>
      {
        //console.log(error);
        this.noDataFound="No Data Found";
      }
    )

  }
  addMember(){
    
    // Object.entries(this.member).forEach(
    //   ([key, value]) => //console.log(key, value)
    // );
    this.memberService.addMember(this.member).subscribe(
      (resp:any) => {
        //console.log(resp);
        const id=resp.id;
        this.successNotification("Added","Member with ID: "+id+" is Added Successfully");
        this.router.navigate(['/dashboard']);
      },
      error => {
        //console.log(error);
      }
    );
  }

  successNotification(status:string,message:string) {
    Swal.fire(status, message, 'success');
  }

  calculateAge(dateString:any) {
    let age:any;
    if (dateString) {
      age = Math.floor((Date.now() - new Date(dateString).getTime()) / (1000 * 3600 * 24)) / 365;
      }
    age=Math.floor(age);
    //console.log({age})
    this.member.age=age;
    return age;
  }



}
