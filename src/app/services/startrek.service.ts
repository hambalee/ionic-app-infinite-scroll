import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterQueryResult} from '../models/characters';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StartrekService {

  constructor(private http: HttpClient) { 
  }

  loadCharacters(page: number): Observable<CharacterQueryResult>{
      let url = `http://stapi.co/api/v1/rest/character/search?pageNumber=${page}`
      return this.http.get(url).pipe(
        map(data => {
          return {
            hasNext: !data['page'].lastPage,
            characters: data['characters']
          }
        })
      )
  }
}

