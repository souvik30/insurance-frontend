import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DependentTableService {
  dependentData:any;
  URL=environment.URL;

  constructor(private http:HttpClient) { }
  getAllDependentData() {
    return this.http.get(this.URL+'dependent');
  }
  getDependentsbyParams(id:any,no:any) {
    return this.http.get(this.URL+'dependent/'+id+'/'+no);
  }
}
