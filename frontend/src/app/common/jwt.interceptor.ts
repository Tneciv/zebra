import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Constants } from './constants';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private router: Router, private alertService: AlertService) {
  }

  getToken() {
    return sessionStorage.getItem(Constants.TOKEN_KEY);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const TOKEN = this.getToken() ? `Bearer ${this.getToken()}` : '';
    req = req.clone({
      // url: `${Constants.API_PREFIX}${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': TOKEN
      }
    });
    return next.handle(req)
      .pipe(catchError((err) => {
        console.log(err);
        if (err.status === Constants.UNAUTHORIZED) {
          // this.router.navigate(['/oauth']);
          console.log(401);
        } else {
          this.alertService.showError('请求异常', err.statusText);
        }
        return throwError(err);
      }));
  };

}





