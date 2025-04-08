import { Component, effect, inject, signal } from '@angular/core';
import { DigiService } from '../../services/digi.service';
import { CommonModule } from '@angular/common';
import { DigiCardComponent } from '../digi-card/digi-card.component';
import { Digimon } from '../../models/digimon';

@Component({
  selector: 'app-list',
  imports: [CommonModule, DigiCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

 service = inject(DigiService);
 digiArray:Digimon[] = [];

  constructor() {
    effect(() => {
      this.digiArray = this.service.digiList();
      console.log(this.digiArray);

    })
    setTimeout(() => {
      this.service.page.set(1);
    }, 3000);
  }

  loadMore() {
    this.service.enlargeList();
    }

}
