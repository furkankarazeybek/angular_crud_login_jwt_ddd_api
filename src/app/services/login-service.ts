import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:3000/api"; 

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, { param: "loginUser", email, password }, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        if (response.status === 200) {
          sessionStorage.setItem("auth-token", response.body?.token);
          sessionStorage.setItem("userId", response.body?.user._id);

          sessionStorage.setItem("roleId", response.body?.user.roleId);

          
          console.log("userıd", response.body?.user._id);

          console.log("token", response.body?.token);
          console.log("roleId", response.body?.roleId);


         
        }
      })
    );
  }
}
