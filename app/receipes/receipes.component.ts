import { Component, OnInit } from '@angular/core';
import { Recipe } from './receipes.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.scss']
})
export class ReceipesComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
