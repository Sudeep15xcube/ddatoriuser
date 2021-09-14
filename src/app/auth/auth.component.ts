import { Component, OnInit } from '@angular/core';
import { NgForm , FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../services/auth.service';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

isLoginMode = true;
error:string="";


 constructor(private authService:AuthService, 
  private router: Router)
   { }



onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
}



onFormSubmit(authForm: NgForm)
{
  // console.log(authForm.value);
  if (!authForm.valid){
    return;
  }
    

  this.error = "";
  let authObs: Observable<AuthResponseData>;


 if(this.isLoginMode){
    //perform login reguest call
    authObs= this.authService.
    login(authForm.value.email, authForm.value.password);
  }
  else{
authObs= this.authService.
signUp(authForm.value.email, authForm.value.password);

  }

authObs.subscribe(response=> {
  console.log(response);
  this.router.navigate(['/home']);
},(errorMessage) =>{
  this.error = errorMessage;
  console.log(this.error);

} 
);





//   if(this.isLoginMode){
//     //perform login reguest call
//     this.authService.login(authForm.value.email, authForm.value.password)
//   .subscribe();

//   }
//   else{
// this.authService.signUp(authForm.value.email, authForm.value.password)
// .subscribe(response=> {
//   console.log(response);
// },(error) =>{
//   console.log(error);
// } 
// );
//   }


}

// getPasswordErrors(password:FormControl){
// if (password.errors && password.errors.required){
//   return 'password required';
// }
// if (password.errors && password.errors.minlength){
//   return 'password is of 6 character required';
// }
// }


 

  ngOnInit(): void {
  }

}
