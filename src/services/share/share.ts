import { Injectable } from '@angular/core';

declare function require ( url: string );

@Injectable()
export class ShareService {
  coverPage;
  paperPage;
  importData;
  constructor () {
    this.coverPage = 'blank';
    this.paperPage = 'blank';
    this.importData = require( '../../assets/import-data.json' );
  }

  setCover ( cover ) { this.coverPage = cover; }
  getCover () { return this.coverPage }

  setPapers ( papers, courses ) { this.paperPage = { papers, courses } }
  getPapers () { return this.paperPage }
}
