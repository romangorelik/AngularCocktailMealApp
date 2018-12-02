import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getCocktails(searchInput): Observable<any[]> {
    return this.http.get<any[]>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
  }
}

