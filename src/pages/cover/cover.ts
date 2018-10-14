import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { ShareService } from '../../services/share/share';

@Component({
  selector: 'page-cover',
  templateUrl: 'cover.html',
})
export class CoverPage {
  validations_form: FormGroup;
  tempServ;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,public navParams: NavParams, shareServ: ShareService) {
    this.tempServ = shareServ;
  }
    //Add selector tool for these: advisor, graduation, degree
    ionViewWillLoad(){
      this.validations_form = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        id: new FormControl('', Validators.required),
        advisor: new FormControl('',),
        graduation: new FormControl('',),
        degree: new FormControl('',),
        minor: new FormControl('',),
        concentrations: new FormControl('',),
        email: new FormControl('',),
        address: new FormControl('',),
        cellNum: new FormControl('',),
        altNum: new FormControl('',),
        longAddress: new FormControl('',)
      })
    }

    validation_messages = {
      'name' : [
        { type: 'required', message: 'Name is required'}
      ],
      'id' : [
        { type: 'required', message: 'Name is required'}
      ],
    };


    ionViewDidLoad(){
      console.log('ionViewDidLoad CoverPage')
    }

  onSubmit(values){
    console.log(values)
    this.tempServ.setCover(values)
  }


}
