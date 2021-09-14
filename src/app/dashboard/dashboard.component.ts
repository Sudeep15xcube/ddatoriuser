import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../services/auth.service'; 
import {UserdataService} from './userdata.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   terms:any="";
p:number=1;
jobb:any=[];//data cane type of
  
  constructor(private router: Router, private authService: AuthService,private job:UserdataService) {
 this.job.getJob().subscribe(data=>{
      this.jobb=data;
      console.log(this.jobb);
    })

   } 



  id: any="";
  
  ngOnInit() {  
    this.id = localStorage.getItem('token');  
    console.log(this.id);  
  }  
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login']);  
  }  
  
}  

