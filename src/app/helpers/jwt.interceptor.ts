import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.jwt_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.jwt_token}`
                }
            });
        }

        return next.handle(request);
    }
}