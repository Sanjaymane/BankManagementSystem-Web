import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private HOST: string;
  
  private registrationData = new Subject<any>();
  
  registrationMsg$ = this.registrationData.asObservable();

  constructor(private http:HttpClient) { this.HOST = "http://localhost:8052/loan/"}


  post(resourceURI, body) : Observable<any>{
    return this.http.post(this.HOST + resourceURI, body);
  }
  
  getUsers(resourceURI){
    return this.http.get(this.HOST + resourceURI);
  }

  getLoanByAccNo(resourceURI,accNo){
    return this.http.get(this.HOST + resourceURI,accNo);
  }

  put(resourceURI, body) : Observable<any>{
    return this.http.put(this.HOST + resourceURI, body);
  }

  deleteUser(resourceURI): Observable<any>{
    return this.http.delete(this.HOST + resourceURI);
  }
}
