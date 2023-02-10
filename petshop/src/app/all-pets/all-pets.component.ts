import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet'; // Import the Pet interface from filename pet

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {

  //names: string[] = ['Fred', 'Sally', 'Julia'];
  thepets: Pet[] = [
    {name: 'Fred', birth: 2018 },
    {name: 'Sally', birth: 2020 },
    {name: 'Julia', birth: 2010}
  ];
  newname: string = '';
  newyear: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addName() {
      //this.names.push(this.newname);
      this.thepets.push( { name: this.newname, birth: this.newyear});
      this.newname = '';
      this.newyear = 0;
  }

  removeLast() {
   //this.names.pop();
   this.thepets.pop();
  }

}
