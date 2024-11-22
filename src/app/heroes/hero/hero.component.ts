import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name: String = 'ironman';
public age: number = 45;

get capitalizaedName(): String {
  return this.name.toLocaleUpperCase();
}

getHeroDescripticon():String {
  return `${this.name} - ${this.age}`
}

changeHero(): void {
this.name = 'Spiderman';
}

changeAge(): void {
this.age = 31
}

resetFomr(): void {
  this.name= 'ironman';
  this.age= 45;
}
}
