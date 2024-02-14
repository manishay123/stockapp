import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  serviceUrlStock: string ="http://localhost:8082/api/v1.0/stocks"
  constructor(private http: HttpClient) {
  }





  addTofavList(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:8083/wishlist/add" , user);
  }
  removeFromFavList(id: any): Observable<any> {
    return this.http.delete<any>("http://localhost:8083/wishlist/delete/"+id);
  }
  viewAllStock(): Observable<any> {
    return this.http.get<any>("http://localhost:8083/wishlist/view");
  }
  getStocks(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/api/v1.0/stocks/country");
  }


  
  private baseUrl = 'http://localhost:8082/api/v1.0/stocks'; // Replace with your actual backend base URL

  getStocksByCountryName(countryName: string): Observable<any> {
    const url = `${this.baseUrl}/country/${countryName}`;
    
    return this.http.get(url);
  }
}
