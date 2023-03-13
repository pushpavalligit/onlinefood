import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
var pendingRequests = 0;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadinService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadinService.showLoading();
    pendingRequests = pendingRequests + 1;
     return next.handle(request).pipe(
      tap({
        next:(event) => {
          if(event.type === HttpEventType.Response){
            this.handleHideLoading();
          }
        },
        error: (_) =>{
          this.handleHideLoading();
        }
      })
     )
    //alert('I am Interceptor')
    return next.handle(request);
  }
  handleHideLoading() {
    pendingRequests  = pendingRequests - 1;
    if(pendingRequests === 0)
    this.loadinService.hideLoading();
  }
}
