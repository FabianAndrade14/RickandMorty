import { Component } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { Character } from '../../interfaces/character';
import { RicknmortyapiService } from '../../services/ricknmortyapi.service';

@Component({
  selector: 'CharactersTable',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters-table.component.html',
  styleUrl: './characters-table.component.css'
})
export class CharactersTableComponent {
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  characters: Character[] = [];

  constructor(private api: RicknmortyapiService) { }

  ngOnInit(): void {

  }

  fetchNextPage(): void {
    throw new Error("Not implemented exception");
  }

  fetchPreviousPage(): void {
    throw new Error("Not implemented exception");
  }
}
