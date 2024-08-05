import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl: string = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  register(name: string, surname: string, email: string,password : string, roleId:string){
    return this.httpClient.post<any>(`${this.apiUrl}`, { param: "addUser", name, surname, email, password, roleId }).pipe(
      tap(() => {
        console.log("Request made successfully!");
      })
    );
  }
}

