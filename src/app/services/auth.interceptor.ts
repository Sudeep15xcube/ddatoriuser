import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //use this if u dont want to execute the interceptor for particular url u do this-----> if(request.url = ='')
     console.log('sending request interceptor');

     let modifiedRequest = request.clone({
        // headers: request.headers.append('auth','abcde'),
        //url:'http://abcdedfdfdf',//url changed 
        // params: request.params.append('me', 'angular'),
     });
    return next.handle(modifiedRequest);
  }
}
