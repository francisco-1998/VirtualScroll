import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) {

  }


  consumirApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
