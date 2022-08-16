import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  URL=environment.URL;
  constructor(private http: HttpClient) { }

  registerAdmin(admin:Admin){
    return this.http.post<any>(this.URL+'register', admin);
  }


}
