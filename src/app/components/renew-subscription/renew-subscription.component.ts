import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/models/payment.model';
import { MediclaimService } from 'src/services/mediclaim.service';
import { SubscriptionService } from 'src/services/subscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-renew-subscription',
  templateUrl: './renew-subscription.component.html',
  styleUrls: ['./renew-subscription.component.css']
})
export class RenewSubscriptionComponent implements OnInit {

  constructor(private subscriptionService:SubscriptionService ,private router:Router, private act_router:ActivatedRoute,private datePipe:DatePipe) { }

  id=this.act_router.snapshot.params['id'];
  expiry_year=((new Date()).getFullYear()+1).toString();

  dateFormat=""
  mmdd="-05-12";
  expiry_date=this.expiry_year.concat(this.mmdd);
  issue_date:any;
  payment= new Payment();

  ngOnInit(): void {
    this.issue_date=this.datePipe.transform(new Date().toLocaleDateString(), 'yyyy-MM-dd')
    this.payment['ID_NUMBER']=this.id;
    this.payment['EXPIRY_DATE']=this.expiry_date;
    this.payment['ISSUE_DATE']=this.issue_date;
    
    
  }
  renewSubscription(){
    console.log(this.payment);
    this.subscriptionService.renewSubscription(this.payment,this.id).subscribe(
      res => {
        console.log(res);
        this.successNotification("Renewed Subscription","Member with ID: "+this.id+" is Renewed Successfully");
        this.router.navigate(['/dashboard']);
        },
        err => {
          console.log(err);
          });       
  }
  successNotification(status:string,message:string) {
    Swal.fire(status, message, 'success');
  }

}
