import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-pet',
  templateUrl: './one-pet.component.html',
  styleUrls: ['./one-pet.component.css']
})
export class OnePetComponent implements OnInit {
name: string = '';
age: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
