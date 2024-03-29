import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from 'src/services/subscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-past-subscription',
  templateUrl: './past-subscription.component.html',
  styleUrls: ['./past-subscription.component.css']
})
export class PastSubscriptionComponent implements OnInit {

  searchValue!: string;
  noDataDisplay='';
  fetchedData:any;
  data=false;
  constructor(private subscriptionService:SubscriptionService,private router:Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
  }
  searchByParam(){
    //console.log(this.searchValue);
    this.subscriptionService.getPreviousRecords(this.searchValue).subscribe(
      (resp) =>{
        this.fetchedData = resp;
        console.log(this.fetchedData);
        this.data=true;
        if(this.fetchedData=='' || this.fetchedData==null){
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
  deleteMember(memberId:number){
    //console.log(memberId);

  }


  printReceipt(paymentID:number){
    //console.log(paymentID);
    this.subscriptionService.printPastRecords(paymentID).subscribe(
      (resp:any) => {
        console.log(resp);
        },
        error=>{
          console.log(error);
          }
          )
  }
  alertConfirmation(memberId:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible and will also delete all Dependents of this Member',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Member removed successfully.', 'success');
        this.deleteMember(memberId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Member is still in our database.)', 'error');
      }
    });
  }

}
