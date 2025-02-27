import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {
  readonly endpoint = "https://contacto-34whorxuxa-uc.a.run.app";

  constructor(private http: HttpClient) { }
  sendData(data: any){
    data["fecha"]= new Date();
    return this.http.post(this.endpoint, data);
  }
}
