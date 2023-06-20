import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';
import { SortComponent } from '../sort/sort.component';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  editDog(dog: Dog): void {
    dog.editing = true;
  }

  saveDog(dog: Dog): void {
    dog.editing = false;
    this.dogService.updateDog(dog).subscribe();
  }

  deleteDog(dog: Dog): void {
    this.dogService.deleteDog(dog.id).subscribe(() => {
      this.dogs = this.dogs.filter((d) => d !== dog);
    });
  }
  sortAscending = true;

sortDogs(): void {
  if (this.sortAscending) {
    this.dogs.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    this.dogs.sort((a, b) => b.name.localeCompare(a.name));
  }
}

toggleSort(): void {
  this.sortAscending = !this.sortAscending;
  this.sortDogs();
}

}
