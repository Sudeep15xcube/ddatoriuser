import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {exhaustMap,take} from "rxjs/operators";

import {DdatoriuserService} from '../service/ddatoriuser.service';

@Injectable()
export class DdatoriuserInterceptor implements HttpInterceptor {

  constructor(private ddatoriuserService:DdatoriuserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   return this.ddatoriuserService.duserSub.pipe(
      take(1), 
      exhaustMap((duser)=>{
  
      
           let searchheaders = new HttpHeaders();
       
           
           // searchheaders = searchheaders.append('grant_type','client_credentials');
          //  searchheaders = searchheaders.append('client_id','ddatori_p_client');
          // searchheaders = searchheaders.append('client_secret','ddatori@#321');
           searchheaders = searchheaders.append('Access-Control-Allow-Origin','*');
           searchheaders = searchheaders.append('Content-Type','application/json');
         // searchheaders = searchheaders.append('Authorization','Basic ZGRhdG9yaV91X2NsaWVudDpkZGF0b3JpQCMzMjE=');//for login/post
            searchheaders = searchheaders.append('Authorization','Bearer ae0a450dd68337fad23a8eb50100b7be17361cd0');//for inside page access/get
          let modifiedReq = request.clone({


        
         headers:searchheaders,

        });
      return next.handle(modifiedReq);
    })
   );

}
}
