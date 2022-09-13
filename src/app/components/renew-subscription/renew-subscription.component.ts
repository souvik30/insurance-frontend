import {
  DatePipe
} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Payment
} from 'src/app/models/payment.model';
import {
  SubscriptionService
} from 'src/services/subscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-renew-subscription',
  templateUrl: './renew-subscription.component.html',
  styleUrls: ['./renew-subscription.component.css']
})
export class RenewSubscriptionComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService, private router: Router, private act_router: ActivatedRoute, private datePipe: DatePipe) {}

  id = this.act_router.snapshot.params['id'];
  dateFormat = ""
  expiry_date: any;
  payment = new Payment();

  ngOnInit(): void {
    const date = new Date();
    console.log(date); // 👉️ Fri Jan 21 2022

    // ✅ Add 1 year to a Date (with Mutation)
    date.setFullYear(date.getFullYear() + 1);

    console.log(date); // 👉️ Sat Jan 21 2023

    //console.log(this.issue_date);
    this.payment['id_NUMBER'] = this.id;
    this.payment['expiry_DATE'] = date
    this.payment['issue_DATE'] = new Date();


  }
  renewSubscription() {
    console.log(this.payment);
    this.subscriptionService.renewSubscription(this.payment, this.id).subscribe(
      res => {
        console.log(res);
        this.successNotification("Renewed Subscription", "Member with ID: " + this.id + " is Renewed Successfully");
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
      });
  }
  successNotification(status: string, message: string) {
    Swal.fire(status, message, 'success');
  }

}