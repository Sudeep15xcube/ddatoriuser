import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'
import {Posts} from '../models/posts';
import {map,switchMap,take} from "rxjs/operators";
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 constructor(private http:HttpClient ,private authService:AuthService) {

   }
   fetchPosts(){

   return this.http.get<{[key:string]:Posts}>(
      `https://authenticationangular-007-default-rtdb.firebaseio.com/posts`
   ).pipe(  map((response) => {
    let posts:Posts[]=[];
    for (let key in response){
      if(response.hasOwnProperty(key)){
      posts.push({ userid:key, ...response[key]});
      }
    }
    return posts;
   })
   );
}

   createPost(postData:Posts){
    return this.http.post<{name:string}>('https://authenticationangular-007-default-rtdb.firebaseio.com/posts'
    ,postData,{
      headers:new HttpHeaders({
        'custom-header':'rani'
      })
    });
   }


   clearPosts(){
 return this.http.delete
 ('https://authenticationangular-007-default-rtdb.firebaseio.com/posts'
).subscribe(response=>{
  console.log(response);
})

   }

}