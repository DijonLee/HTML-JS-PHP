import {Component} from '@angular/core';
import {Loading, Modal, NavController} from 'ionic-angular';
import {ContractPage} from '../contract-page/contract';

@Component({
  templateUrl: 'build/pages/home-page/home.html'
})

export class HomePage {
  show: boolean = false;
  heart: string = "#fff";
  thumb: string = "#fff";

  constructor(private nav: NavController) { }

  toggleFiles() {
    this.show = !this.show;
  }

  searchContract() {
    this.nav.push(ContractPage);
    /*let loading = Loading.create({
      content: "Loading...",
      duration: 180000,
      dismissOnPageChange: true
    });
    this.nav.present(loading);*/
  }

  changeStyle() {
    if(this.heart === "#fff" && this.thumb === "#fff") {
      return this.heart = "#F34C62", this.thumb = "#84E9A2";
    }
    else {
      return this.heart = "#fff", this.thumb = "#fff";
    }
  }
}