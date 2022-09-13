import {
  Injectable
} from '@angular/core';
import {
  environment
} from 'src/environments/environment';
import {
  HttpClient
} from '@angular/common/http';
import {
  Member
} from 'src/app/models/member.model';
import { Memberu } from 'src/app/models/memberu.model';

@Injectable({
  providedIn: 'root'
})
export class MasterTableService {
  masterList: any;
  URL = environment.URL;

  constructor(private http: HttpClient) {}

  getMasterList() {
    return this.http.get(this.URL + 'master/');
  }
  getMasterListbyParams(id: any, mobile: any) {
    return this.http.get(this.URL + 'master/' + id + '/' + mobile + '/');
  }
  getDepartment() {
    return this.http.get(this.URL + "master/department");
  }
  addMember(member: Member) {
    return this.http.post(this.URL + "master/", member);
  }
  deleteMember(id: any) {
    return this.http.delete(this.URL + "master/" + id);
  }
  updateMember(id: any, member: Member) {
    return this.http.put(this.URL + "master/" + id, member);
  }
  getMemberById(id: any) {
    return this.http.get(this.URL + "master/" + id);
  }
  async getMemberByIdAsync(id: any) {
    try{
      const response= await this.http.get(this.URL + "master/" + id).toPromise();
      return response;
    }catch(err){
      //console.log(err);
      throw err
    }
  }
}