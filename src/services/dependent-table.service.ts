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
  async getCountofDependents(id:any) {
    try{
      const response= await this.http.get(this.URL+'dependent/count/'+id).toPromise();
      return response;
    }catch(err){
      console.log(err);
      throw err;
    }
  }
}
