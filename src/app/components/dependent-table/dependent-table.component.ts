import { Component, OnInit } from '@angular/core';
import { DependentTableService } from 'src/services/dependent-table.service';

@Component({
  selector: 'app-dependent-table',
  templateUrl: './dependent-table.component.html',
  styleUrls: ['./dependent-table.component.css']
})
export class DependentTableComponent implements OnInit {

  dependentTableData:any;
  Data:any;
  constructor(private dependentTableService:DependentTableService) { }

  ngOnInit(): void {
    this.dependentTableService.getAllDependentData().subscribe(
      (resp) =>{
        this.dependentTableData = resp;
        this.Data=this.dependentTableData.data;
        console.log(this.dependentTableData);
        if(this.dependentTableData=='' || this.dependentTableData==null){
          this.dependentTableData = 'No Data Found !!';
        }
      }
    );
  }

}
