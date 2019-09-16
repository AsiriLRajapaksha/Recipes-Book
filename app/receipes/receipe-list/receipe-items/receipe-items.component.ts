import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../receipes.model';

@Component({
  selector: 'app-receipe-items',
  templateUrl: './receipe-items.component.html',
  styleUrls: ['./receipe-items.component.scss']
})
export class ReceipeItemsComponent implements OnInit {
 @Input() recipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
