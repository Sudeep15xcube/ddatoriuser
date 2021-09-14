import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
    HttpEventType,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable()
export class LogginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
console.log(request.headers);
    return next.handle(request).pipe(tap((event)=>{
      console.log(event);
      console.log('loggin response from interceptor');
      if(event.type === HttpEventType.Response){
        console.log(event.body);
      }
    }));
  }
}
