import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10
    },
  ];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();



  // onDeleteCharacter(index: number): void {
  //   this.onDelete.emit(index);
  // }


  onDeleteCharacterById(id: string): void {
    this.onDelete.emit(id);
  }

}
