import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DependentTableService } from 'src/services/dependent-table.service';

@Component({
  selector: 'app-search-dependents',
  templateUrl: './search-dependents.component.html',
  styleUrls: ['./search-dependents.component.css']
})
export class SearchDependentsComponent implements OnInit {
  searchValue!: string;
  noDataDisplay='';
  fetchedData:any;
  data=false;
  constructor(private dependentTableService:DependentTableService,private router:Router) { }

  ngOnInit(): void {
  }
  searchByParam(){
    console.log(this.searchValue);
    this.dependentTableService.getDependentsbyParams(this.searchValue,null).subscribe(
      (resp) =>{
        this.fetchedData = resp;
        console.log(this.fetchedData);
        this.data=true;
        if(this.fetchedData=='' || this.fetchedData==null){
          this.noDataDisplay ="No Match found!!"
          this.data=false;
        }
        // this.route.navigate(['/event']);
      },
      error=>{
        console.log("No Dependent Found");
        this.noDataDisplay ="No Dependent Found!"
        this.data=false;
      }
    )
  }

}
