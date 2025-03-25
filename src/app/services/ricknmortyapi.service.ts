import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../interfaces/api-response';
import { Character } from '../interfaces/character';



@Injectable({
  providedIn: 'root'
})
export class RicknmortyapiService {
  
  nextUrl = '';
  previousUrl = '';

  constructor(private http: HttpClient) { }

  getNextPage(): Observable<ApiResponse> {
    throw new Error("Not implemented exception");
  }

  getPreviousPage(): Observable<ApiResponse> {
    throw new Error("Not implemented exception");
  }
}

const ApiUrl: string = 'https://rickandmortyapi.com/api/character';
