import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

/*
 *  Component Decorator:
 *      requires a selector and template/templateUrl
 * 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "OVERWATCH";
  hero: Hero = {id: 1, name: "Winston"};
}
