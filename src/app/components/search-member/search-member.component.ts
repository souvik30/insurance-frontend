import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterTableService } from 'src/services/master-table.service';

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
    console.log(this.searchValue);
    this.masterTableService.getMasterListbyParams(this.searchValue,this.searchValue,this.searchValue).subscribe(
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
        console.log("No Member Found");
        this.noDataDisplay ="No Member Found!"
        this.data=false;
      }
    )
  }

}
