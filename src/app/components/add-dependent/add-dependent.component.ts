import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { Dependent } from 'src/app/models/dependent.model';
import { Memberu } from 'src/app/models/memberu.model';
import { DependentTableService } from 'src/services/dependent-table.service';
import { MasterTableService } from 'src/services/master-table.service';

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

  constructor(private memberService:MasterTableService, private router:Router,private dependentService:DependentTableService) { }

  ngOnInit(): void {

  }
  async getCurrentDependents(memberId:number){
    return this.dependentService.getCountofDependents(memberId).then((data:any)=>{
      console.log(data);
      return data.noOfDependent;
    }).catch(err=>{
      console.log(err);
    })
  }
  async getMember(id:number)
  {
    console.log("Working");
    console.log(id);

    this.id_string=id.toString();
    if(this.id_string.length==''){
      console.log("It's Blank");
      this.validId=false;
      this.member= new Memberu();
    }
    else{
          this.maxDependents=await this.getCurrentDependents(this.dependent['ID']);
          console.log('CURR_DEPENDENTS='+this.maxDependents);
      this.memberService.getMemberById(id).subscribe(
      (res:any) =>{
        console.log(res);
        this.member = res.data[0];
        this.validId=true;
        this.validId2=true;

        if( this.member==null){
          this.notfound = "No Data Found, Please add Member";
          this.validId=false;
          this.validId2=false;
          this.member= new Memberu();
        }
        else{
          
        }
        console.log(this.member);
        if(id==null || id==undefined){
          console.log("Blank ID");
          this.validId=false;
          this.member= new Memberu();
        }

      },
      error =>{
        console.log("error fetching Memberlist")
        this.notfound = "No Data Found, Please add Member";
        this.validId=false;
        this.validId2=false;
        this.member= new Memberu();
      }
    );
    }
  }

}
