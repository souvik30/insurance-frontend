import { Component, OnInit } from '@angular/core';
import { MasterTableService } from 'src/services/master-table.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-master-table',
  templateUrl: './master-table.component.html',
  styleUrls: ['./master-table.component.css']
})
export class MasterTableComponent implements OnInit {
  masterTableData:any;
  Data:any;

  constructor(private masterService:MasterTableService,private router:Router) { }

  ngOnInit(): void {
    this.getMember();
  }

  
  getMember(){
    this.masterService.getMasterList().subscribe(
      (resp) =>{
        this.masterTableData = resp;
        this.Data=this.masterTableData;
        console.log(this.Data);
        //console.log(this.masterTableData.data);
        if(this.masterTableData=='' || this.masterTableData==null){
          this.masterTableData = 'No Data Found !!';
        }
      },

    );
  }
  deleteMember(memberId:number){
    //console.log(memberId);
    this.masterService.deleteMember(memberId).subscribe(
      (resp) => {
        //console.log(resp);
        this.getMember();
        },
        error=>{
          //console.log(error);
          this.getMember();
          }
    );
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
