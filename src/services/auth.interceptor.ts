import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newReq = request;
        let token = this.loginService.getToken();
        //console.log("Interceptor ",token)
        if(token!=null)
        {
            // adds Bearer + token to the requested list
            newReq = newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
        }
    return next.handle(newReq);
  }
}
