import { Component, OnInit } from '@angular/core';
import { MasterTableService } from 'src/services/master-table.service';
import { Router } from '@angular/router';

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

}
