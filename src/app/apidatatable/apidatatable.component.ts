import { Component, OnInit } from '@angular/core';
import { ApidataService } from './apidata.service'; 

@Component({
  selector: 'app-apidatatable',
  templateUrl: './apidatatable.component.html',
  styleUrls: ['./apidatatable.component.scss']
})
export class ApidatatableComponent implements OnInit {

   terms:any="";
p:number=1;
jobb:any=[];//data cane type of

  constructor(private job:ApidataService) {
 this.job.getJob().subscribe(data=>{
      this.jobb=data;
      console.log(this.jobb);
    })

   } 
   ngOnInit(): void {  }

  
}  

