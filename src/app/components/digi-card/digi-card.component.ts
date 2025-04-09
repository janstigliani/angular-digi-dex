import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-digi-card',
  imports: [RouterModule],
  templateUrl: './digi-card.component.html',
  styleUrl: './digi-card.component.scss'
})
export class DigiCardComponent {
  digiName = input("", {alias: "name"});
  digiImg = input("", {alias: "img"});
  digiHref = input("", {alias: "href"});
}
