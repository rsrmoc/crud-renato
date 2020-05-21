import { User } from './user.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readById(id: number) {
    throw new Error("Method not implemented.");
  }

  private url = 'http://rpsys.com.br/Rotinas/Api';

  constructor( private http: HttpClient) { }

  getUsers(){
    const _url = `${this.url}/user`;
    return this.http.get<any[]>(_url);
  }

  getUser(id : string): Observable<User> {
    const _url = `${this.url}/user/${id}`;
    return this.http.get<User>(_url);
  }
 
  updateUser(id: string, request: any){
    const _url_up = `${this.url}/CriarUser/${id}`;
    return this.http.put<User>(_url_up, JSON.stringify(request));
  }
 
  createUser(request: User): Observable<User> {
    const _url_up = `${this.url}/CriarUser`;
    return this.http.post<User>(_url_up,request);
  }

  delete(id: number): Observable<User> {
    const url = `${this.url}/DelUser/${id}`;
    return this.http.delete<User>(url).pipe(
     
    );
  }

}
