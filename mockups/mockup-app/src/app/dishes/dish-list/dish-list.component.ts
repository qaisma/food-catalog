import { Component, OnInit } from '@angular/core';
import { DishDataModel } from '../models/dish-data.model';
import {ThemePalette} from '@angular/material/core'
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishNames = Array<string>();
  dishList = Array<DishDataModel>();
  constructor() {
    this.dishList = this.getDishesList();
  }

  ngOnInit(): void {
  }

  getDishesList(): DishDataModel[] {

    this.dishNames.push('Burgers with fries');
    this.dishNames.push('Chicken Sandwich');
    this.dishNames.push('Tacos');
    this.dishNames.push('Hotdog Sandwich');
    this.dishNames.push('Crispy Chicken');
    this.dishNames.push('Cheese Fries');
    this.dishNames.push('Pizza');
    this.dishNames.push('Fruit Salad');
    this.dishNames.push('Magloobeh');
    this.dishNames.push('Mansaf');

    var result = new Array<DishDataModel>();
    for (var i = 1; i <= 10; i++) {
      var dishName = this.dishNames[i - 1];
      result.push({
        id: i,
        title: dishName,
        subtitle: 'Main course',
        image: '../assets/img/' + i + '.jpg',
        content: 'delecious ' + dishName + ' with pickles and stuff.',
        featured: false
      });
    }

    result[9].featured = true;
    result[10].featured = true;

    return result;
  }

}
