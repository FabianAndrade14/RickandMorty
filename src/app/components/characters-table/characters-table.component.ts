import { Component, OnInit } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { Character } from '../../interfaces/character';
import { RicknmortyapiService } from '../../services/ricknmortyapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'CharactersTable',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters-table.component.html',
  styleUrl: './characters-table.component.css'
})
export class CharactersTableComponent implements OnInit {

  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  characters: Character[] = [];

  constructor(private api: RicknmortyapiService) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters( page: number = 1 ): void {
    this.api.getCharacters(page).subscribe( response => {
      console.log("Personajes obtenidos: ", response.characters);
      this.characters = response.characters;
      this.hasNextPage = response.hasNextPage;
      this.hasPreviousPage = response.hasPreviousPage;
    })
  }

  fetchNextPage(): void {

      this.api.getNextPage().subscribe( response => {
        this.characters = response.characters;
        this.hasNextPage = response.hasNextPage;
        this.hasPreviousPage = response.hasPreviousPage;
      });

  }

  fetchPreviousPage(): void {
    this.api.getPreviousPage().subscribe(response => {
      console.log("⬅️ Cargando página anterior...");
      this.characters = response.characters;
      this.hasNextPage = response.hasNextPage;
      this.hasPreviousPage = response.hasPreviousPage;
    });
  }
}
