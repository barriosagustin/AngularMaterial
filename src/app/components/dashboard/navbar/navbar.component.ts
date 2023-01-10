import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _menuService: MenuService) { }
  menu: Menu[] = [];

  ngOnInit(): void {
    this.cargarMenu();
  }

cargarMenu(){
  this._menuService.getMenu().subscribe(data =>{
    this.menu = data;
  })
}

}
