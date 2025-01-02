
import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 1000,
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500,
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500,
        },
    ];

    onAddCharacter(character: Character): void {
        const newCharacter: Character = {
            ...character,
            id: uuid(),
        };

        this.characters.push(newCharacter);
    }

    onDeleteCharacterById(id: string): void {
        const character = this.characters.find( character => character.id === id);

        if (character && confirm(`¿Eliminar a ${character.name}?`)) {
            this.characters = this.characters.filter(character => character.id !== id);
        }
    }

}