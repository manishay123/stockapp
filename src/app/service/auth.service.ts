import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/users';
  serviceUrl: string = "http://localhost:8081/api/v1.0/authentication";

  constructor(private http: HttpClient) {
  }

  getAllUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getUser`);
  }
 
  createUser(user: any): Observable<any> {
   return this.http.post<any>(`${this.baseUrl}/register`, user);
  }
 
  updateUser(userId: any, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateUser/${userId}`, user);
  }
  getUserById(userId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getUser/${userId}`);
  }
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.serviceUrl+ "/register" , user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.serviceUrl+ "/login" , user);
  }

  checklogin() {
    const user = localStorage.getItem('userData');
    if (!user) {
      return false;
    }
    return true;
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  GetToken(){

    return localStorage.getItem('token')||'';
  }
}