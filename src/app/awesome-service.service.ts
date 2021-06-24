import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Awesome } from './awesome';


const baseUrl = `http://localhost:3000/awesomes`;

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) {  }

  getAll(): Observable<any>{
    return this.http.get<Awesome[]>(baseUrl);
  }



  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  create(data:any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl,data);
  }
  update(id: number, data: Awesome) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    const data2 = JSON.stringify(data);
    console.log(data2, `${baseUrl}/${id}`);

    return this.http.put(`${baseUrl}/${id}`, data2, {headers: headers});
  }
  getAwesome(id:any): Observable<any> {
    return this.http.get<Awesome>(`${baseUrl}/${id}`);
  }

}
