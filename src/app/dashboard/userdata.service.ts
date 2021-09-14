import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
// api = config.API_URL;
    constructor(private http:HttpClient) {

   }
   getJob(){
    let apiurl="https://authenticationangular-007-default-rtdb.firebaseio.com/userdata.json";
    
    return this.http.get(apiurl);
    // return this.http.get(this.api);
   }
}