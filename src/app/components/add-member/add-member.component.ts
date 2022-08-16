import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MasterTableService } from 'src/services/master-table.service';

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

  }
  addMember(){
    
    Object.entries(this.member).forEach(
      ([key, value]) => console.log(key, value)
    );

  }

}
