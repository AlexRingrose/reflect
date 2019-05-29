import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../services/share/share';

@Component( {
  selector: 'page-cover',
  templateUrl: 'cover.html',
} )
export class CoverPage {
  shareServ;
  constructor ( public navCtrl: NavController,
    public navParams: NavParams, public _share: ShareService ) {
    this.shareServ = _share;
  }
  //Add selector tool for these: advisor, graduation, degree

  ionViewDidLeave () {
    this._share.saveData();
  }
}
