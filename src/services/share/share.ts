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

    this._store.loadData().then( res => {
      console.log( this.coverPage )
      if ( res !== null ) {
        this.coverPage = res.coverPage;
        console.log( res.coverPage )
        console.log( this.coverPage )
        this.paperPage = res.paperPage;
        this.goalPage = res.paperPage;
      }

    } );
  }

  saveData () {
    this._store.saveData( {
      coverPage: this.coverPage,
      paperPage: this.paperPage,
      goalPage: this.goalPage
    } );
  }

}
