import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = []

  constructor(private dogService: DogService) {
  }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  updateDog(dog: Dog): void {
  }

  deleteDog(dog: Dog): void {
  }
}
