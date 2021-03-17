import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  ssubmitLoginData(data) {
    const url = `http://localhost:1010/login`;
    console.log(data);

    return this.http.post<any>(url, data);
}
}
