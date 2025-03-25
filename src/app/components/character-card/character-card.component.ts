import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'CharacterCard',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character!: Character;

  getStatusClass( status: string ): string {
    switch (status) {
      case 'Alive':
        return 'Alive';
      case 'Dead':
        return 'Dead';
      default:
        return 'unknown';
    }
  }
}
