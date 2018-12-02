import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchmealsService {

  constructor(private http: HttpClient) { }

  getMeals(meal): Observable<any[]> {
    return this.http.get<any[]>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  }

}
