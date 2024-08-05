import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  getUserInfo(userId: string) {
    const authToken = sessionStorage.getItem("auth-token");
    console.log("giriş tokenı", authToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.httpClient.post<any>(`${this.apiUrl}`,
      { param: "getUserById", userId: userId },
      { headers: headers }
    ).pipe(
      tap(() => {
        console.log("UserId", userId);
      })
    );
  }

  getAllUsers(): Observable<any> {
    const authToken = sessionStorage.getItem("auth-token");
    console.log("giriş tokenı", authToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.httpClient.post<any>(`${this.apiUrl}`,
      { param: "getUserList" },
      { headers: headers }
    ).pipe(
      tap(() => {
        console.log("Fetching all users");
      })
    );
  }

  deleteUser(userId: string): Observable<any> {
    const authToken = sessionStorage.getItem("auth-token");
    console.log("giriş tokenı", authToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.httpClient.post<any>(`${this.apiUrl}`,
      { param: "deleteUser", userId: userId },
      { headers: headers }
    ).pipe(
      tap(() => {
        console.log("Deleting user with ID:", userId);
      })
    );
  }

  updateUser(userId: string, updatedFields: any): Observable<any> {
    const authToken = sessionStorage.getItem("auth-token");
    console.log("giriş tokenı", authToken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const body = {
      param: "updateUser",
      userId: userId,
      ...updatedFields
    };

    return this.httpClient.post<any>(`${this.apiUrl}`,
      body,
      { headers: headers }
    ).pipe(
      tap(() => {
        console.log("Updating user with ID:", userId, "with fields:", updatedFields);
      })
    );
  }

  
}
