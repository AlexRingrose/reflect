import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShareService } from '../../services/share/share';
import { StoreServiceProvider } from '../../services/store-service/store-service';

@Component( {
  selector: 'page-cover',
  templateUrl: 'cover.html',
} )
export class CoverPage {
  shareServ;
  constructor ( public navCtrl: NavController,
    public navParams: NavParams, public _share: ShareService,
    public _store: StoreServiceProvider ) {
    this.shareServ = _share;
  }
  //Add selector tool for these: advisor, graduation, degree

  onSubmit ( values ) {
    console.log( values )
    // this.shareServ.setCover(values)
  }

  ionViewDidLeave () {
    this._store.saveData();
  }
}
