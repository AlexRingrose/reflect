import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl }
  from '@angular/forms';

import { ShareService } from '../../services/share/share';

@Component( {
  selector: 'page-papers',
  templateUrl: 'papers.html',
} )

export class PapersPage {
  public courseList = [];
  courseAry;
  shareServ;
  paperNumber = [];

  constructor ( public navCtrl: NavController,
    public formBuilder: FormBuilder, public navParams: NavParams,
    public _share: ShareService ) {
    this.paperNumber = [ 'First', 'Second', 'Third', 'Fourth',
      'Fifth', 'Sixth', 'Seventh', 'Eighth' ];
    this.shareServ = _share;
    this.courseAry = _share.importData.courseAry;

    for ( let i = 0; i < this.courseAry.length; i++ ) {
      this.courseList.push( this.courseAry[ i ] )
    }

  }

  ionViewDidLeave () {
    this._share.saveData();
  }

  onSubmit ( values ) {
    // console.log( this.selectedCourses )
    // this.shareServ.setPapers( values, this.selectedCourses )
  }
}
