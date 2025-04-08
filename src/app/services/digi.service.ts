import { effect, Injectable, signal } from '@angular/core';
import { Digimon } from '../models/digimon';

@Injectable({
  providedIn: 'root'
})
export class DigiService {

  readonly BASE_URL = "https://digi-api.com/api/v1/digimon";
  page = signal(0);
  digiList = signal<Digimon[]>([]);

  constructor() { 

    effect(() => {
      this.page();
      this.getDigimon();
    }) 

  }

  async getDigimon() {
    const url = this.BASE_URL + "?page=" + this.page();
    console.log(url)
    const data = await fetch(url).then(res => res.json());
    this.digiList.update(oldList => oldList.concat(data.content));
    return this.digiList();
  }

  enlargeList() {
    this.page.update(oldValue => oldValue+1);
  }
}
