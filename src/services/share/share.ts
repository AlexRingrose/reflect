import { Injectable } from '@angular/core';

declare function require ( url: string );

@Injectable()
export class ShareService {
  dataRetrieved;
  coverPage: {};
  paperPage: {};
  goalPage: Array<any>;
  importData;
  goalNumber;
  constructor () {
    this.importData = require( '../../assets/import-data.json' );

    this.goalPage = [];
    this.goalNumber = Object.keys( this.importData.goalData ).length + 1

    for ( let i = 0; i < this.goalNumber; i++ ) {
      this.goalPage.push( { response: '', rating: '' } );
    }

    this.coverPage = {
      name: '', id: '', advisor: '', graduation: '',
      degree: '', minor: '', concentractions: '', email: '',
      address: '', cellNum: '', altNum: '', longAddress: ''
    };

    this.paperPage = { courseList: [], paperList: [] };


  }
}
