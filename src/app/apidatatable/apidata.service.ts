import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {map, switchMap, take} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Userdata } from '../models/userdata';
import { User} from "../auth/user.model";


@Injectable({
  providedIn: 'root'
})
export class ApidataService {
   constructor(private http:HttpClient, private authService:AuthService) {

   }
   getJob(){
    // let apiurl="https://authenticationangular-007-default-rtdb.firebaseio.com/userdata.json";
    
    // return this.http.get(apiurl);
    


    return this.authService.userSub.pipe(take(1),switchMap((user) => {
      let searchParams = new HttpParams();
      searchParams= searchParams.append('auth', user._token);
      return this.http.get<{[key:string]:Userdata}>
      ('https://authenticationangular-007-default-rtdb.firebaseio.com/userdata.json',{
       params:searchParams,
      }
      );
    }),
    map((response) =>{
      let userdata:Userdata[]=[];
      for(let key in response){
        userdata.push({...response[key],key});
      }
      return userdata;
    })
    );
   }
 }
