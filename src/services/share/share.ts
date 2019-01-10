import { Injectable } from '@angular/core';
import { StoreServiceProvider } from '../store-service/store-service';

declare function require ( url: string );

@Injectable()
export class ShareService {
  dataRetrieved;
  coverPage: {};
  paperPage: {};
  goalPage: Array<any>;
  importData;
  goalNumber;
  constructor ( public _store: StoreServiceProvider ) {
    this.importData = require( '../../assets/import-data.json' );

    this.goalNumber = Object.keys( this.importData.goalData ).length + 1

    //If :Data doesnt exist in local storage, initialize variables for data
    //Else :Load data from local storage

    //if ( this._store.loadData() === null ) {

    this.goalPage = [];

    for ( let i = 0; i < this.goalNumber; i++ ) {
      this.goalPage.push( { response: '', rating: '' } );
    }

    this.coverPage = {
      name: '', id: '', advisor: '', graduation: '',
      degree: '', minor: '', concentractions: '', email: '',
      address: '', cellNum: '', altNum: '', longAddress: ''
    };

    this.paperPage = { courseList: [], paperList: [] };
    /*
        } else {

          this._store.loadData().then( res => {
            this.coverPage = res.coverPage;
            this.paperPage = res.paperPage;
            this.goalPage = res.goalPage;
          } );
        }
    */
  }
}
