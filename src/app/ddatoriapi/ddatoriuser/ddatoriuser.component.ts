import { Component, OnInit } from '@angular/core';
import {DdatoriuserService} from '../service/ddatoriuser.service';
import { NgForm , FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ddatoriuser',
  templateUrl: './ddatoriuser.component.html',
  styleUrls: ['./ddatoriuser.component.scss']
})
export class DdatoriuserComponent implements OnInit {
posts:any;
isLoginMode = true;

error:string="";
   constructor(private ddatoriuserService:DdatoriuserService, private router: Router) { }

onFormSubmit(authForm: NgForm)
{

  // console.log(authForm.value);
   if (!authForm.valid){
    return;
  }

if(this.isLoginMode){

 this.ddatoriuserService
 .postDdatoriuser(authForm.value.email, authForm.value.password)
 .subscribe(
  (response)=>{
     this.router.navigate(['/admin']);
    console.log(response);
  },
  (error)=>{
    console.log(error);
  }
  );
  console.log(authForm.value.email,authForm.value.password);
  }

 
}


  ngOnInit(): void {}
  

}
