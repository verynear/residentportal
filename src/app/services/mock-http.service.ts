// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class MockHttpService implements HttpInterceptor {

//     constructor() { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         let url: string = request.url;
//         let method: string = request.method;


//         return fakeBackend(url, method, request) ||
//             realBackend(url, method, request) ||
//             next.handle(request); // fallback in case url isn't caught
//     }

// }
