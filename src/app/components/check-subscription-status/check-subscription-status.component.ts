import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediclaimService } from 'src/services/mediclaim.service';
import { SubscriptionService } from 'src/services/subscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-subscription-status',
  templateUrl: './check-subscription-status.component.html',
  styleUrls: ['./check-subscription-status.component.css']
})
export class CheckSubscriptionStatusComponent implements OnInit {

  searchValue!: string;
  noDataDisplay='';
  fetchedData:any;
  data=false;
  constructor(private subscriptionService:SubscriptionService,private router:Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
  }
  searchByParam(){
    //console.log(this.searchValue);
    this.subscriptionService.getStatus(this.searchValue).subscribe(
      (resp) =>{
        this.fetchedData = resp;
        console.log(this.fetchedData);
        this.data=true;
        if(this.fetchedData=='' || this.fetchedData==null || this.fetchedData.length<1){
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
  renewSubscription(memberID: number)
  {
    this.router.navigate(['/renew-subscription', memberID]);    
  }


}

