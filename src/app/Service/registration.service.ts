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

  constructor(private http:HttpClient) { this.HOST = "http://localhost:8051/" }


  post(resourceURI, body) : Observable<any>{
    return this.http.post(this.HOST + resourceURI, body);
  }

  sendData(candidateData: any){
    return this.registrationData.next(candidateData); 
  }

}
