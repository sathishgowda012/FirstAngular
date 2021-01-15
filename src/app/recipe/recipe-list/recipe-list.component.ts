import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('This is my name'
    , 'This is Description'
    , 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.buzzfeed.com%2Fvideo-api-prod%2Fassets%2Feb44570519264864814264f7f0a5e47a%2FBFV13909_BakedRatatouille-ThumbTextless1080.jpg%3Foutput-format%3Dauto%26output-quality%3Dauto&imgrefurl=https%3A%2F%2Ftasty.co%2Frecipe%2Fratatouille&tbnid=SnEqdOzPfKvxYM&vet=12ahUKEwiKl6Cmyp7uAhWGeysKHbngAygQMygSegUIARChAg..i&docid=Gx7qz19qZw_ItM&w=1080&h=1080&q=recipes&ved=2ahUKEwiKl6Cmyp7uAhWGeysKHbngAygQMygSegUIARChAg')];


  constructor() {
  }

  ngOnInit(): void {
  }

}
