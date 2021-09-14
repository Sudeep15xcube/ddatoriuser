import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
// import {map} from "rxjs/operators";
// import {Observable} from 'rxjs';
import {Posts} from '../models/posts';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


postForm:any;
// data:any;

posts:Posts[]=[];//data cane type of

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title:new FormControl(null, Validators.required),
      content:new FormControl(null, Validators.required)
    })

this.getPosts();
   
  }

/*--------------get data-----using service---------*/
  getPosts(){
   this.postsService.fetchPosts().subscribe((response) =>{
      this.posts=response;
   });
}



/*-----------------------post call through http in angular, push data into firebase api */
onCreatePost(){
  const postData= this.postForm.value;//posting form data
  this.postsService.createPost(postData).subscribe((response) =>{
    this.getPosts();
  });

}


/*----------delete post ------------*/
 onClearPosts(event:Event){
  event.preventDefault();
  this.postsService.clearPosts();
  this.posts=[];
 }






/*---------post call through http in angular, push data into firebase api without service----*/
// onCreatePost(){
//   const postData= this.postForm.value;//posting form data
//   this.http.post<{name:string}>('https://authenticationangular-007-default-rtdb.firebaseio.com/posts.json'
//     ,postData).subscribe(response =>{
//     this.getPosts();
      
//       // .....check console.log(response);
//     });
//   //..... check console.log(this.postForm.value);
// }


/*-------------------get data--without service------------------------------*/




// getPosts(){

//   this.http.get<{[key:string]:Posts}>(`https://authenticationangular-007-default-rtdb.firebaseio.com/posts.json`
//    ).pipe(
//    map((response) => {
//     let posts:Posts[]=[];
//     for (let key in response){
//       if(response.hasOwnProperty(key)){
//       posts.push({ userid:key, ...response[key]});
//     }
//   }
//     return posts;
// })
//  )
//     .subscribe((response:Posts[]) =>{
//       this.posts=response
//       console.log(this.posts);

//     });
// }


}


