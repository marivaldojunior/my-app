import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyupComponent{
  values = '';

  /*
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  */

  onKey(event: KeyboardEvent) { // with type info
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }
}
//////////////////////////////////////////
/*
@Component({
  selector: 'app-keyup',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyupComponent {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
*/
//////////////////////////////////////////
/*
@Component({
  selector: 'app-keyup',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyupComponent {
  value = '';
  onEnter(value: string) { this.value = value; }
}
*/
//////////////////////////////////////////
/*
@Component({
  selector: 'app-keyup',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyupComponent {
  value = '';
  update(value: string) { this.value = value; }
}
*/
