import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private tebak : number;
  private random : number;
  guess : boolean;
  teks : string;

  constructor() {
    this.random = this.getRandom();
    console.log(this.random);
  }

  getRandom() {
    return Math.floor(Math.random() * Math.floor(10));
  }

  submit() {
    if(this.tebak > 0 && this.tebak <= 10) {
      if(this.tebak == this.random) {
        this.guess = true;
        this.teks = "Tebakan anda benar, angka adalah "+this.random;
      }
      else {
        this.teks = "Silahkan coba lagi";
      }
    }
    else {
      this.teks = "Input angka hanya 1-10!";
    }
  }

}
