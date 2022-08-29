import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediclaimService {

  URL=environment.URL;
  constructor(private http: HttpClient) { }

  getStatus(id: any) {
    return this.http.get(this.URL + 'mediclaim/status/' + id );
  }
  getPreviousRecords(id: any) {
    return this.http.get(this.URL + 'mediclaim/' + id );
    }
}
