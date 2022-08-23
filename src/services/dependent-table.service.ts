import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Dependent } from 'src/app/models/dependent.model';

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
  getDependentsbyId(id: any) {
    return this.http.get(this.URL + "dependent/" + id);
  }
  async getCountofDependents(id:any) {
    try{
      const response= await this.http.get(this.URL+'dependent/count/'+id).toPromise();
      return response;
    }catch(err){
      //console.log(err);
      throw err;
    }
  }
  addDependent(dependent: Dependent) {
    return this.http.post(this.URL + "dependent", dependent);
  }
  deleteDependent(id: number) {
    return this.http.delete(this.URL + "dependent/" + id);
  }

  updateDependent(id: any, dependent: Dependent) {
    return this.http.put(this.URL + "dependent/" + id, dependent);
  }
}
