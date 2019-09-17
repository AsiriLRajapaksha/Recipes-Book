import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../receipes.model';

@Component({
  selector: 'app-receipe-items',
  templateUrl: './receipe-items.component.html',
  styleUrls: ['./receipe-items.component.scss']
})
export class ReceipeItemsComponent implements OnInit {
 @Input() recipe : Recipe;
 @Output() recipeSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }
  onSelect(){
    this.recipeSelected.emit();
  }

}
