import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

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
    // Implement delete functionality if needed
  }
}
