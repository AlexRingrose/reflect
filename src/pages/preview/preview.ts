import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../services/share/share';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  serviceData: string;
  constructor(public navCtrl: NavController,public navParams: NavParams, shareServ: ShareService) {
    this.serviceData = shareServ.getCover();
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad PreviewPage')
      console.log(this.serviceData);
  }

}
