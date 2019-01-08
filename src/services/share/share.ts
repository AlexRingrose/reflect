import { Injectable } from '@angular/core';

declare function require ( url: string );

@Injectable()
export class ShareService {
  coverPage: {};
  paperPage: {};
  importData;
  constructor () {
    this.coverPage = {
      name: '', id: '', advisor: '', graduation: '',
      degree: '', minor: '', concentractions: '', email: '',
      address: '', cellNum: '', altNum: '', longAddress: ''
    };
    this.paperPage = { courseList: [], paperList: [] };

    this.importData = require( '../../assets/import-data.json' );
  }
}
