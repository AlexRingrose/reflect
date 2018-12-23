import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  coverPage;
  paperPage;
  constructor() {
    this.coverPage = 'blank';
    this.paperPage = 'blank';
  }

  setCover(cover){ this.coverPage = cover; }
  getCover(){ return this.coverPage }

  setPapers(papers,courses){ this.paperPage = {papers,courses} }
  getPapers(){ return this.paperPage }
}
