import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  cover;
  papers;
  constructor() {
    this.cover = 'blank';
    this.papers = 'blank';
  }

  setCover(cover){ this.cover = cover; }
  getCover(){ return this.cover }

  setPapers(papers){ this.papers = papers }
  getPapers(){ return this.papers }
}
