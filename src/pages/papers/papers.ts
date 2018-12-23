import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl }
  from '@angular/forms';

import { ShareService } from '../../services/share/share';

declare function require ( url: string );

@Component( {
  selector: 'page-papers',
  templateUrl: 'papers.html',
} )

export class PapersPage {
  public courseList = [];
  courseAry = require( '../../assets/import-data.json' ).courseAry;

  papers_form: FormGroup;
  tempServ;
  selectedCourses;

  constructor ( public navCtrl: NavController,
    public formBuilder: FormBuilder, public navParams: NavParams,
    shareServ: ShareService ) {
    this.courseList
    for ( let i = 0; i < this.courseAry.length; i++ ) {
      this.courseList.push( this.courseAry[ i ] )
      // ,values:this.courseAry[i].substr(0,3)})
    }
    this.tempServ = shareServ;
    this.selectedCourses = [];
  }

  ionViewWillLoad () {
    this.papers_form = this.formBuilder.group( {
      paper1: new FormControl( '' ),
      paper2: new FormControl( '' ),
      paper3: new FormControl( '' ),
      paper4: new FormControl( '' ),
      paper5: new FormControl( '' ),
      paper6: new FormControl( '' ),
      paper7: new FormControl( '' ),
      paper8: new FormControl( '' ),
    } )
  }

  onSubmit ( values ) {
    console.log( this.selectedCourses )
    this.tempServ.setPapers( values, this.selectedCourses )
  }
}
