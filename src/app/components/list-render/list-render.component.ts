import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Cléo', type: 'Cat', age: 3 },
    { name: 'Zion', type: 'Cat', age: 5 },
    { name: 'Chetara', type: 'Dog', age: 12 },
    { name: 'Bob', type: 'Horse', age: 8 },
  ];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
