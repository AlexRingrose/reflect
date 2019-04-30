import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const KEY = 'ReflectStorage';

@Injectable()
export class StoreServiceProvider {

  constructor ( private _storage: Storage ) {
    console.log( 'Hello StoreServiceProvider Provider' );
  }

  loadData () {
    return this._storage.get( KEY );
  }

  saveData ( OBJ ) {
    this._storage.set( KEY, OBJ )
  }

}
