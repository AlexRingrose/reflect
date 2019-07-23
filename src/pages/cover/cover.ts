import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../services/share/share';

@Component( {
  selector: 'page-cover',
  templateUrl: 'cover.html',
} )
export class CoverPage {
  @ViewChild( 'defaultFocus' ) defaultFocus;
  shareServ;
  constructor ( public navCtrl: NavController,
    public navParams: NavParams, public _share: ShareService ) {
    this.shareServ = _share;
  }
  //Add selector tool for these: advisor, graduation, degree

  ionViewDidLoad () {
    setTimeout( () => {
      this.defaultFocus.setFocus();
    }, 100 );
  }

  ionViewDidLeave () {
    this._share.saveData();
  }
}
