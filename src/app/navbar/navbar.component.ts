import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label:'View Polls',
        icon:'pi pi-fw pi-star',
        routerLink:'polls',
      },
      {
        label:'Add Poll',
        icon:'pi pi-fw pi-plus'
      }
    ];
  }


}
