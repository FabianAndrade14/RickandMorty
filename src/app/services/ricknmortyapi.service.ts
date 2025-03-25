import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../interfaces/api-response';
import { Character } from '../interfaces/character';



@Injectable({
  providedIn: 'root'
})
export class RicknmortyapiService {

  private apiUrl: string = 'https://rickandmortyapi.com/api/character'
  private currentPage: number = 1;
  private previousUrl: string | null = null;

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<ApiResponse> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      map(response => ({
        hasNextPage: !!response.info?.next,
        hasPreviousPage: !!response.info?.prev,
        characters: response.results.map((char: any) => ({
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          image: char.image
        }))
      }))
    );
  }

  getNextPage(): Observable<ApiResponse> {
    // if (!this.currentPage) {
    //   throw new Error("Página actual no definida");
    // }
    return this.getCharacters(this.currentPage + 1);
  }

  getPreviousPage(): Observable<ApiResponse> {
    // if (this.currentPage <= 1) {
    //   return new Observable<ApiResponse>();
    //   throw new Error("No hay página anterior");
    //   return EMPTY;
    // }
    return this.getCharacters(this.currentPage - 1);
  }
}

