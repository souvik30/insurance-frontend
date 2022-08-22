import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { Memberu } from 'src/app/models/memberu.model';
import { MasterTableService } from 'src/services/master-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  departmentList:any;
  // member=new Member();
  member= new Memberu();
  noDataFound='';
  Data:any;
  fetchedData:any;
  data:any;
  dob:any;
  dor:any;
  rd:any;
  noDataDisplay: any;

  constructor(private memberService:MasterTableService, private router:Router, private act_router:ActivatedRoute,private datePipe:DatePipe) { }

  id=this.act_router.snapshot.params['id'];
  ngOnInit(): void {
    this.memberService.getDepartment().subscribe(
      res=>{
        this.Data=res;
        this.departmentList=this.Data.data;
        console.log(this.departmentList);
        if(this.departmentList=='' || this.departmentList==null) {
          this.noDataFound="No Department Found";
        }
      },
      error=>
      {
        console.log(error);
        this.noDataFound="No Data Found";
      }
    )
    this.memberService.getMemberById(this.id).subscribe(
      (resp:any) =>{
        console.log(resp.data);
        this.member = resp.data[0];
        this.dob=this.datePipe.transform(this.member['DATE_OF_BIRTH'],'yyyy-MM-dd');
        this.dor=this.datePipe.transform(this.member['DATE_OF_RETIREMENT'],'yyyy-MM-dd');
        this.rd=this.datePipe.transform(this.member['REGISTRATION_DATE'],'yyyy-MM-dd');
        this.member['DATE_OF_BIRTH']=this.dob;
        this.member['DATE_OF_RETIREMENT']=this.dor;
        this.member['REGISTRATION_DATE']=this.rd;
      },
      error=>{
        console.log("No Member Found");
        this.noDataDisplay ="No Member Found!"
        this.data=false;
      }
    )
  }
  calculateAge(dateString:any) {
    let age:any;
    if (dateString) {
      age = Math.floor((Date.now() - new Date(dateString).getTime()) / (1000 * 3600 * 24)) / 365;
      }
    age=Math.floor(age);
    console.log({age})
    this.member['AGE']=age;
    return age;
  }
  updateMember(){
    this.memberService.updateMember(this.id, this.member).subscribe(data =>
      {
        console.log(data)
        this.successNotification("Updated","Member with ID: "+this.id+" is Updated Successfully");
        this.router.navigate(['/dashboard']);
        },
        error=>{
          console.log(error)
          });
  }
  successNotification(status:string,message:string) {
    Swal.fire(status, message, 'success');
  }
  


}
