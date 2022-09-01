import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterTableService } from 'src/services/master-table.service';
import { MediclaimService } from 'src/services/mediclaim.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-mediclaim-subscription',
  templateUrl: './check-mediclaim-subscription.component.html',
  styleUrls: ['./check-mediclaim-subscription.component.css']
})
export class CheckMediclaimSubscriptionComponent implements OnInit {

  searchValue!: string;
  noDataDisplay='';
  fetchedData:any;
  data=false;
  constructor(private mediclaimService:MediclaimService,private router:Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
  }
  searchByParam(){
    //console.log(this.searchValue);
    this.mediclaimService.getStatus(this.searchValue).subscribe(
      (resp) =>{
        this.fetchedData = resp;
        console.log(this.fetchedData);
        this.data=true;
        if(this.fetchedData=='' || this.fetchedData==null || this.fetchedData.data.length<1){
          this.noDataDisplay ="No Match found!!"
          this.data=false;
        }
      },
      error=>{
        //console.log("No Member Found");
        this.noDataDisplay ="No Member Found!"
        this.data=false;
      }
    )
  }
  renewMember(memberID: number)
  {
    this.router.navigate(['/renew-membership', memberID]);    
  }


}
