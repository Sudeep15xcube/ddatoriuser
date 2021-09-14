import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,HttpParams,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {map,exhaustMap,take} from "rxjs/operators";
import { User} from "../auth/user.model";




@Injectable()

export class AuthtokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
   return this.authService.userSub.pipe(
      take(1), 
      exhaustMap((user)=>{
  
        if(!user)
        {
        
          return next.handle(request);
        }
           // let searchheaders = new HttpHeaders();
          // searchheaders = searchheaders .append('auth', 'anju');
          // searchheaders  = searchheaders .append('custom','appendparams1');
         let searchParams= new HttpParams();
          searchParams = searchParams.append('auth', user.token);
          searchParams = searchParams.append('custom','appendparams1');
          //    searchheaders = searchheaders.append('Access-Control-Allow-Origin','*');
          // searchheaders = searchheaders.append('grant_type','password');
          // searchheaders = searchheaders.append('client_id','ddatori_p_client');
          // searchheaders = searchheaders.append('cclient_secret','ddatori@#321');
        let modifiedReq = request.clone({
          params:searchParams,
         // headers:searchheaders,

        });
      return next.handle(modifiedReq);
    })
   );
 }
}
