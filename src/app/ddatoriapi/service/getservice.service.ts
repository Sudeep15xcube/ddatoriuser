import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {
constructor(private http:HttpClient) { }
 
    
getDdatoriuser(){
     // let searchheaders = new HttpHeaders();
     //  searchheaders = searchheaders.append('Access-Control-Allow-Origin','*');
     // searchheaders = searchheaders.append('Content-Type','application/json');
     // searchheaders = searchheaders.append('Authorization','Bearer 8d7d3c35f97a20c039d578d4b4814d5afe7229fc');//for inside page access/get
     
    let apiurl="http://api.ddatori.com/profile-get-api";
    return this.http.get(apiurl,
      // {
      //   headers:searchheaders,
       
      // },
      );
   
   }
 }