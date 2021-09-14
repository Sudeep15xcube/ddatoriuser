import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';  
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Subject, throwError,  BehaviorSubject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { User} from "../auth/user.model";
// import {Observable} from 'rxjs';
import { Router} from "@angular/router";




export interface AuthResponseData{
idToken:string;
email:string;
refreshToken:string;
expiresIn:string;
localId:string;
registered?:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLoggedIn = false;

// userSub = new Subject<User>();//before token send
userSub = new BehaviorSubject<User | null>(null);
clearTimeout:any;


constructor(private http:HttpClient, private router:Router) { }   


signUp(email:string, password:string){
return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyDtzSoo8TiJPB-4P9dIF34bWypbh13bX8w ` 
  ,{email, password, returnSecureToken:true }
  ).pipe(catchError(this.getErrorHandler),
   tap(this.handleUser.bind(this))
   );
}


login(email:string, password:string){
return this.http.post<AuthResponseData>
(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyDtzSoo8TiJPB-4P9dIF34bWypbh13bX8w`
 ,{email, password, returnSecureToken:true }
 ).pipe(catchError(this.getErrorHandler),
 tap(this.handleUser.bind(this))
 );

}

private handleUser(response:AuthResponseData){
    const expirationDate= new Date(new Date().getTime() +
     +response.expiresIn * 1000);
    const user = new User(
      response.email,
      response.localId,
      response.idToken, 
      expirationDate
    );

    this.userSub.next(user);
    localStorage.setItem('keyidentifier', JSON.stringify(user));//set the data in local storeage token etc
    this.autoLogout(+response.expiresIn*1000);
  }


getErrorHandler(errorRes:HttpErrorResponse){
let errorMessage='An Error Occured';
if (!errorRes.error || !errorRes.error.error){
  return throwError(errorMessage);
}
switch (errorRes.error.error.message){
  case 'EMAIL_EXISTS':
   errorMessage="Email Already Exists";
   break;
  case 'EMAIL_NOT_FOUND':
   errorMessage = 'Email not found';
   break;
  case 'INVALID_PASSWORD':
  errorMessage = 'Invalid password';
  break;
}
return throwError(errorMessage);
}

autoLogin(){
  let userData:{
    email:string;
   _token:string;
   expirationDate:string;
   localId:string;
 } = JSON.parse(localStorage.getItem('keyidentifier') || '{}');

  if(!userData){
    return;
  }
let user = new User(
   userData.email,
   userData.localId,
   userData._token,
   new Date(userData.expirationDate)

  );
if(user.token){
  this.userSub.next(user);
}
let date = new Date().getTime();
let expirationDate = new Date(userData.expirationDate).getTime();
this.autoLogout(expirationDate - date);
}

logouts(){
  this.userSub.next(null);
  // this.isLoggedIn = false;
  this.router.navigate(['/auth']);
  localStorage.removeItem('keyidentifier');
 if(this.clearTimeout){
  clearTimeout(this.clearTimeout);
 }
}

autoLogout(expirationDate:number){
 console.log(expirationDate);
  this.clearTimeout = setTimeout(()=>{
    this.logouts();
  },expirationDate);
}

// isAuthenticate(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(this.isLoggedIn);
//     },1000);
//     });
//   }



   logout() :void {    
   localStorage.setItem('isLoggedIn','false');    
   localStorage.removeItem('token');    
   }  
}
