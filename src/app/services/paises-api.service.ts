import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesAPIService {

  constructor(private http:HttpClient) { }


  consumirAPI(){
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }
}
