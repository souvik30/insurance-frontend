import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/models/payment.model';
import { MediclaimService } from 'src/services/mediclaim.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-renew-membership',
  templateUrl: './renew-membership.component.html',
  styleUrls: ['./renew-membership.component.css']
})
export class RenewMembershipComponent implements OnInit {

  constructor(private mediclaimService:MediclaimService ,private router:Router, private act_router:ActivatedRoute,private datePipe:DatePipe) { }

  id=this.act_router.snapshot.params['id'];
  expiry_year=((new Date()).getFullYear()+1).toString();

  dateFormat=""
  mmdd="-05-12";
  expiry_date=this.expiry_year.concat(this.mmdd);
  issue_date='';
  payment= new Payment();

  ngOnInit(): void {
    this.issue_date=this.issue_date.concat(((new Date()).getFullYear()).toString(),"-",((new Date()).getMonth()+1).toString(),"-",((new Date()).getDate()).toString());
    //console.log(this.issue_date);
    this.payment['ID_NUMBER']=this.id;
    this.payment['EXPIRY_DATE']=this.expiry_date;
    this.payment['ISSUE_DATE']=this.issue_date;
    
    
  }
  renewMembership(){
    console.log(this.payment);
    this.mediclaimService.renewMembership(this.payment,this.id).subscribe(
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
