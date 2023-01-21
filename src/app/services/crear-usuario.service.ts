import { Injectable,Component } from '@angular/core';
import { Tile } from '../interfaces/usuario';



@Injectable({
  providedIn: 'root'
})
export class GridListDynamicExample {
    tiles: Tile[] = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
  constructor() { }
 
  pruebaCarga(){
    return this.tiles.slice();
}

}
