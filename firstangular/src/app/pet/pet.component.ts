import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() petname: string = 'Fred';
  @Input() species: string = '';
  num: number = 0;
  constructor() { 
    //this.petname = 'Sally';
    this.num = Math.random();
  }

  ngOnInit(): void {
  }

}
