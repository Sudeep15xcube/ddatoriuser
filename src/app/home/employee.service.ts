import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import {config} from '../config'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// api = config.API_URL;
    constructor(private http:HttpClient) {

   }
   getJob(){
    let apiurl="https://jsonplaceholder.typicode.com/users";
     // let apiurl="http://api.ddatori.com/oauth";
    return this.http.get(apiurl);
    // return this.http.get(this.api);
   }
}
