import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipes.model';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Receipes','Description test','../recipe.jpg'),
    new Recipe('A Test Receipes','Description test','../recipe.jpg'),
    new Recipe('A Test Receipes','Description test','../recipe.jpg'),
    new Recipe('A Test Receipes','Description test','../recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
