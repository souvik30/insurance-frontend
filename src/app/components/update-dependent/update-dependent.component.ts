import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dependent } from 'src/app/models/dependent.model';
import { Memberu } from 'src/app/models/memberu.model';
import { DependentTableService } from 'src/services/dependent-table.service';
import { MasterTableService } from 'src/services/master-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-dependent',
  templateUrl: './update-dependent.component.html',
  styleUrls: ['./update-dependent.component.css']
})
export class UpdateDependentComponent implements OnInit {
  member=new Memberu();
  dependent=new Dependent();
  notfound='';
  id_string:any;
  maxDependents='';
  public validId2=true;
  public validId=false;
  dob: any;
  memberIsValid: any;
  noDataDisplay='';

  constructor(private memberService:MasterTableService, private router:Router,private dependentService:DependentTableService,private act_router:ActivatedRoute,private datePipe:DatePipe) { }
  
  id=this.act_router.snapshot.params['id'];
  ngOnInit(): void {
    //console.log(this.id);
    this.dependentService.getDependentsbyId(this.id).subscribe(
      (resp:any) =>{
        //console.log(resp.data);
        this.dependent = resp.data[0];
        this.dob=this.datePipe.transform(this.dependent['DOB'],'yyyy-MM-dd');
        this.dependent['DOB']=this.dob;
      },
      error=>{
        //console.log("No Member Found");
        // this.noDataDisplay ="No Member Found!"
        // this.data=false;
      }
    )
  }
  calculateAge(dateString:any) {
    let age:any;
    if (dateString) {
      age = Math.floor((Date.now() - new Date(dateString).getTime()) / (1000 * 3600 * 24)) / 365;
      }
    age=Math.floor(age);
    //console.log({age})
    this.dependent['AGE']=age;
    return age;
  }
  updateDependent(){
    this.dependentService.updateDependent(this.id, this.dependent).subscribe(data =>
      {
        //console.log(data)
        this.successNotification("Updated","Dependent with NO: "+this.id+" is Updated Successfully");
        this.router.navigate(['/dashboard']);
        },
        error=>{
          //console.log(error)
          });
  }
  successNotification(status:string,message:string) {
    Swal.fire(status, message, 'success');
  }

}
