import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  <input #newHero
    (keyup.enter)="addHero(newHero.value)"
    (blur)="addHero(newHero.value); newHero.value='' ">

  <button (click)="addHero(newHero.value)">Add</button>

  <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
