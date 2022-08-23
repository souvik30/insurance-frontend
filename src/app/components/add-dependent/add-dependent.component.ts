import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { Dependent } from 'src/app/models/dependent.model';
import { Memberu } from 'src/app/models/memberu.model';
import { DependentTableService } from 'src/services/dependent-table.service';
import { MasterTableService } from 'src/services/master-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-dependent',
  templateUrl: './add-dependent.component.html',
  styleUrls: ['./add-dependent.component.css']
})
export class AddDependentComponent implements OnInit {
  member=new Memberu();
  dependent=new Dependent();
  notfound='';
  id_string:any;
  maxDependents='';
  public validId2=true;
  public validId=false;
  memberIsValid=false;
  noDataDisplay='';
  currentDependents: any;
  allowed=false;
  notAllowedDataDisplay='';

  constructor(private memberService:MasterTableService, private router:Router,private dependentService:DependentTableService) { }

  ngOnInit(): void {

  }
  async getCurrentDependents(memberId:number){
    return this.dependentService.getCountofDependents(memberId).then((data:any)=>{
      //console.log(data);
      return data.noOfDependent;
    }).catch(err=>{
      //console.log(err);
    })
  }
  async getMaxAllowed(memberId:number){
    return this.memberService.getMemberByIdAsync(memberId).then((data:any)=>{
      //console.log(data.error);
      if(data.error==true){
        this.memberIsValid=false;
        this.noDataDisplay="Member Not Found!";
        return 0;
      }
      else{
      this.memberIsValid=true;
      return data.data[0]['FAMILY_GROUP'].substr(2,2);
      }
    }).catch(err=>{
      ////console.log(err);
    })
  }
  async getMember(id:number)
  {
    //console.log("Working");
    //console.log(id);

    this.id_string=id.toString();
    if(this.id_string.length==''){
      //console.log("It's Blank");
      this.validId=false;
      this.member= new Memberu();
    }
    else{
          this.currentDependents=await this.getCurrentDependents(this.dependent['ID']);
          this.maxDependents=await this.getMaxAllowed(this.dependent['ID']);
          //console.log('CURR_DEPENDENTS='+this.currentDependents+'||| MAX_ALLOWED='+this.maxDependents);
      this.memberService.getMemberById(id).subscribe(
      (res:any) =>{
        //console.log(res);
        if(!res.error){
          this.member = res.data[0];
          this.validId=true;
          this.validId2=true;


          if( this.member==null){
            this.notfound = "No Data Found, Please add Member";
            this.validId=false;
            this.validId2=false;
            this.member= new Memberu();
            this.allowed=false;
          }
          else{
            
          }
          //console.log(this.member);
          if(id==null || id==undefined){
            //console.log("Blank ID");
            this.validId=false;
            this.member= new Memberu();
            this.allowed=false;
          }
          this.allowed=true;
          this.notAllowedDataDisplay='';
          if(this.currentDependents>=this.maxDependents){
            this.allowed=false;
            this.notAllowedDataDisplay='You have reached the maximum number of dependents allowed';
          }

      }
      else{
        this.notfound = "No Data Found, Please add Member";
        this.validId=false;
        this.validId2=false;
        this.member= new Memberu();
        }
      },
      error =>{
        //console.log("error fetching Memberlist")
        this.notfound = "No Data Found, Please add Member";
        this.validId=false;
        this.validId2=false;
        this.member= new Memberu();
      }
    );
    }
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
  

  addDependent(){
    //console.log(this.dependent);
    this.dependentService.addDependent(this.dependent).subscribe(
      (resp:any) => {
        //console.log(resp);
        const id=resp.id;
        this.successNotification("Added","Dependent with ID: "+id+" is Added Successfully");
        this.router.navigate(['/dashboard']);
      }
    );
  }
  
  successNotification(status:string,message:string) {
    Swal.fire(status, message, 'success');
  }

}
