import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterTableService {
  masterList:any;
  URL=environment.URL;

  constructor(private http: HttpClient) { }

  getMasterList() {
    return this.http.get(this.URL+"master");
  }
  getMasterListbyParams(id:any,mobile:any,ticket:any) {
    return this.http.get(this.URL+'master/'+id+'/'+mobile+'/'+ticket);
  }
  getDepartment(){
    return this.http.get(this.URL+"department");
  }
}
