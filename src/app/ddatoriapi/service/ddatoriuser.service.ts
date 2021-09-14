import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {  BehaviorSubject} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
// export interface AuthResponseData{

// email:string;
// password:string;
// }

export interface Duser{

grant_type:string;
email:string;
password:string;

}

@Injectable({
  providedIn: 'root'
})
export class DdatoriuserService {



duserSub = new BehaviorSubject<Duser | null>(null);

constructor(private http:HttpClient) { }
 
    
getDdatoriuser(){

    let apiurl="http://api.ddatori.com/profile-get-api";
    return this.http.get(apiurl,
      // {
      //    headers : new HttpHeaders({
      //     'Authorization':'Bearer 5abb53dfe009182e44436153bc992310cac9db13',
      //    })
      // },
      );
   
   }

postDdatoriuser(email:string,password:string){
 
    return this.http.post('http://api.ddatori.com/oauth',
      {
        grant_type:'password',
        username:email,
         password:password
      },
    

      );
  
   }


}


// 8e924c981a4d37d4a3bd6910333bd9701257637e




   
