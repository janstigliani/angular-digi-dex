import { Component, input } from '@angular/core';

@Component({
  selector: 'app-digi-card',
  imports: [],
  templateUrl: './digi-card.component.html',
  styleUrl: './digi-card.component.scss'
})
export class DigiCardComponent {
  digiName = input("", {alias: "name"})
  digiImg = input("", {alias: "img"})
}
