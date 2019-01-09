import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl }
  from '@angular/forms';

import { ShareService } from '../../services/share/share';

@Component( {
  selector: 'page-cover',
  templateUrl: 'cover.html',
} )
export class CoverPage {
  cover_form: FormGroup;
  shareServ;
  constructor ( public navCtrl: NavController, public formBuilder: FormBuilder,
    public navParams: NavParams, shareServ: ShareService ) {
    this.shareServ = shareServ;
  }
  //Add selector tool for these: advisor, graduation, degree

  onSubmit ( values ) {
    console.log( values )
    // this.shareServ.setCover(values)
  }
}
