import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ShareService } from '../share/share';

const KEY = 'ReflectStorage';

@Injectable()
export class StoreServiceProvider {

  constructor ( private _storage: Storage, private _share: ShareService ) {
    console.log( 'Hello StoreServiceProvider Provider' );
  }

  loadData () {
    this._storage.get( KEY ).then( res => {
      this._share.dataRetrieved = res;
    } )
  }

  saveData () {
    this._storage.set( KEY, {
      coverPage: this._share.coverPage,
      paperPage: this._share.paperPage,
      goalPage: this._share.goalPage
    } )
  }

}
