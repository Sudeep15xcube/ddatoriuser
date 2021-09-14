import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
terms:any="";
p:number=1;
jobb:any=[];//data cane type of
 public isCollapsed = false;


  constructor(private job:EmployeeService) {
   this.job.getJob().subscribe(data=>{
      this.jobb=data;
      console.log(this.jobb);
    })

   }
 

  ngOnInit(): void {
  }

}
