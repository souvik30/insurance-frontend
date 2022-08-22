import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DependentTableService } from 'src/services/dependent-table.service';
import { MasterTableService } from 'src/services/master-table.service';

@Component({
  selector: 'app-add-dependent',
  templateUrl: './add-dependent.component.html',
  styleUrls: ['./add-dependent.component.css']
})
export class AddDependentComponent implements OnInit {

  constructor(private memberService:MasterTableService, private router:Router,private dependentService:DependentTableService) { }

  ngOnInit(): void {
  }

}
