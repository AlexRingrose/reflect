import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-cover',
  templateUrl: 'cover.html',
})
export class CoverPage {
  validations_form: FormGroup;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,public navParams: NavParams) {}

    ionViewWillLoad(){
      this.validations_form = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        id: new FormControl('', Validators.required)
      })
    }

    validation_messages = {
      'name' : [
        { type: 'required', message: 'Name is required'}
      ],
      'id' : [
        { type: 'required', message: 'Name is required'}
      ]
    };


    ionViewDidLoad(){
      console.log('ionViewDidLoad CoverPage')
    }

  onSubmit(values){
    console.log(values)
    //this.navCtrl.push(HomePage);
  }


}
