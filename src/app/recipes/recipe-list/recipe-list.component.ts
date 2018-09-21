import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test recipe','https://images-gmi-pmc.edge-generalmills.com/8a61d4b7-8967-47f0-b486-71a0e86ca82a.jpg' ),
    new Recipe('A Test Recipe', 'This is simply a test recipe','https://images-gmi-pmc.edge-generalmills.com/8a61d4b7-8967-47f0-b486-71a0e86ca82a.jpg' ),
    new Recipe('A Test Recipe', 'This is simply a test recipe','https://images-gmi-pmc.edge-generalmills.com/8a61d4b7-8967-47f0-b486-71a0e86ca82a.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
