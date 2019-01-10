import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor ( public navCtrl: NavController, public navParams: NavParams,
    shareServ: ShareService ) {
    this.paperNumber = [ 'First', 'Second', 'Third', 'Fourth',
      'Fifth', 'Sixth', 'Seventh', 'Eighth' ];
    this.shareServ = shareServ;
    this.courseAry = shareServ.importData.courseAry;

    for ( let i = 0; i < this.courseAry.length; i++ ) {
      this.courseList.push( this.courseAry[ i ] )
    }

  }

  onSubmit ( values ) {
    // console.log( this.selectedCourses )
    // this.shareServ.setPapers( values, this.selectedCourses )
  }
}
