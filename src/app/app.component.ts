import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RicknmortyapiService } from './services/ricknmortyapi.service';
import { ApiResponse } from './interfaces/api-response';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hr-front-rick-n-morty';

  constructor( private ricknmortyapiService: RicknmortyapiService ) {}

  ngOnInit(): void {
    this.ricknmortyapiService.getCharacters().subscribe(
      (response: ApiResponse ) => {
        console.log('API Response:', response);
      },
      (error) => {
        console.error('Error fetching characters: ', error);

      }
    )
  }
}
