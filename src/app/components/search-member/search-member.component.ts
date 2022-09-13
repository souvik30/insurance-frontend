import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterTableService } from 'src/services/master-table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-member',
  templateUrl: './search-member.component.html',
  styleUrls: ['./search-member.component.css']
})
export class SearchMemberComponent implements OnInit {

  searchValue!: string;
  noDataDisplay='';
  fetchedData:any;
  data=false;

  constructor(private masterTableService:MasterTableService,private router:Router) { }

  ngOnInit(): void {
  }
  searchByParam(){
    //console.log(this.searchValue);
    this.masterTableService.getMasterListbyParams(this.searchValue,this.searchValue).subscribe(
      (resp:any) =>{
        this.fetchedData = resp;
        console.log(this.fetchedData);
        this.data=true;
        if(this.fetchedData=='' || this.fetchedData==null){
          this.noDataDisplay ="No Match found!!"
          this.data=false;
        }
        
      },
      error=>{
        //console.log("No Member Found");
        this.noDataDisplay ="No Member Found!"
        this.data=false;
      }
    )
  }
  deleteMember(memberId:number){
    //console.log(memberId);
    this.masterTableService.deleteMember(memberId).subscribe(
      (resp) => {
        //console.log(resp);
        this.searchByParam();
        },
        error=>{
          //console.log(error);
          this.searchByParam();
          }
    );
  }
  updateMember(memberId: number)
  {
    this.router.navigate(['/update-member', memberId]);    
  }
  alertConfirmation(memberId:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible and will also delete all Dependents of this Member',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Member removed successfully.', 'success');
        this.deleteMember(memberId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Member is still in our database.)', 'error');
      }
    });
  }

}
