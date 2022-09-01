import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from 'src/app/models/payment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  URL = environment.URL;
  constructor(private http: HttpClient) {}

  getStatus(id: any) {
    return this.http.get(this.URL + 'subscription/status/' + id);
  }
  getPreviousRecords(id: any) {
    return this.http.get(this.URL + 'subscription/' + id);
  }
  printPastRecords(paymentID: number) {
    return this.http.get(this.URL + 'print/pastRecords' + paymentID);
  }
  renewSubscription(payment: Payment,id:any){
    return this.http.post(this.URL + 'subscription/activate/'+id, payment);
  }
}