import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {
  endpoint = "https://contacto-34whorxuxa-uc.a.run.app";

  constructor(private http: HttpClient) { }
  sendData(data: any){
    data["fecha"]= new Date();
    data["momento"] = Date.now();
    this.http.post(this.endpoint, data).subscribe(res=>{
      console.log(res);
    }, error=>{ console.error(error)});
  }
}
