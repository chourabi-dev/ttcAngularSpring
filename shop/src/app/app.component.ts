import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  menus = [
    {
      title:"My clients",
      link:'/clients',
      icon:'fas fa-users'
    },
    {
      title:"Mes produits",
      link:'/produits',
      icon:'fas fa-boxes'
    },
    
  ];
}
