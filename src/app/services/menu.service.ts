import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Appetizers{
  id: string;
  title: string;
  price: number;
}

export interface Dish{
  id: string;
  title: string;
  price: number;
}

export interface Dessert{
  id: string;
  title: string;
  price: number;
}

export interface Menu {
  appetizers: Appetizers[];
  dishes: Dish[];
  desserts: Dessert[];
  //foodItems: FoodItem[];
}

export interface FoodItem{
  id: string;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Menu = {
    appetizers: [
      {
        id: 'app1',
        title: 'Sale Grecque',
        price: 6.5,
      },
      {
        id: 'app2',
        title: 'Feuilleté à la Feta',
        price: 7,
      },

    ],
    dishes: [
      {
        id: 'dishes1',
        title: 'Gambas grillé',
        price: 17,
      },
      {
        id: 'dishes2',
        title: 'Kebab maison - mix de viandes',
        price: 15,
      }
    ],
    desserts: [
      {
        id: 'des1',
        title: 'Tiramsu',
        price: 5,
      },
      {
        id: 'des2',
        title: 'Baklava',
        price: 4.5,
      }
    ],

  }

  http = inject(HttpClient);

  getMenu(): Observable<Menu> {
    return of(this.menu);
  }

  getMenuItem(menuItemType: string, menuItemId: string):Observable <FoodItem>{
    let foodItem: FoodItem = { id: 'notFound', title: 'Not Found', price: 0};
    switch(menuItemType){
      case 'appetizers' :
        foodItem = this.menu.appetizers.find(item => item.id === menuItemId) || foodItem;
        break;
      case 'dishes' :
          foodItem = this.menu.dishes.find(item => item.id === menuItemId) || foodItem;
          break;
      case 'desserts' :
          foodItem = this.menu.desserts.find(item => item.id === menuItemId) || foodItem;
          break;
      default:
        foodItem = { id: 'notFound', title: 'Not Found', price: 0}
    }
    return of(foodItem);
  }
}
