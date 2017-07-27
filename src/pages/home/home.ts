import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  complains: number;

  constructor(public navCtrl: NavController,
              private _storage: Storage) {

    _storage.get(this.getDate()).then((complains) => {
      this.complains = complains ? complains : 0;
    });
  }

  complain() {
    this.complains++;
    this._storage.set(this.getDate(), this.complains);
  }

  getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  }

  getColor() {

    if (this.complains == 0) {
      return "green";
    } else if (this.complains < 7) {
      return "yellow";
    }
    return "red";
  }
}