import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Memberu } from 'src/app/models/memberu.model';
import { DependentTableService } from 'src/services/dependent-table.service';
import { MasterTableService } from 'src/services/master-table.service';

@Component({
  selector: 'app-search-dependents',
  templateUrl: './search-dependents.component.html',
  styleUrls: ['./search-dependents.component.css']
})
export class SearchDependentsComponent implements OnInit {
  searchValue!: string;
  noDataDisplay='';
  fetchedData:any;
  data=false;
  allowed=false;
  member=new Memberu();
  memberIsValid=false;

  currentDependents: any;
  maxAllowedDependents: any;
  constructor(private dependentTableService:DependentTableService,private memberService:MasterTableService,private router:Router) { }

  ngOnInit(): void {
  }
  async getMaxAllowed(memberId:string){
    return this.memberService.getMemberByIdAsync(memberId).then((data:any)=>{
      console.log(data);
      if(data.data[0]==null){
        this.memberIsValid=false;
        this.noDataDisplay="Member Not Found!";
      }
      return data.data[0]['FAMILY_GROUP'].substr(2,2);
    }).catch(err=>{
      console.log(err);
    })
  }
  async getCurrentDependents(memberId:string){
    return this.dependentTableService.getCountofDependents(memberId).then((data:any)=>{
      console.log(data);
      return data.noOfDependent;
    }).catch(err=>{
      console.log(err);
    })
  }
  async searchByParam(){
    console.log(this.searchValue);
    this.maxAllowedDependents=await this.getMaxAllowed(this.searchValue);

    console.log('MAX_ALLOWED='+this.maxAllowedDependents);
    this.currentDependents=await this.getCurrentDependents(this.searchValue);
    this.dependentTableService.getDependentsbyParams(this.searchValue,null).subscribe(
      (resp) =>{
        this.fetchedData = resp;
        console.log(this.fetchedData);
        this.data=true;
        
        if(this.fetchedData.error==true || this.fetchedData==null){
          console.log("SoftNotFound")
          this.noDataDisplay ="No Dependent found!"
          this.data=false;
        }
        if(this.maxAllowedDependents==this.currentDependents)
        {
          this.allowed=false;
          console.log("Not Allowed");
          this.noDataDisplay ="MAX DEPENDENTS REACHED!"
        }
        else{
          this.allowed=true;
          console.log("Allowed");
        }

        // this.route.navigate(['/event']);
      },
      error=>{
        console.log("No Dependent Found");
        this.noDataDisplay ="No Dependent Found!"
        this.data=false;
      }
    )
  }

}
