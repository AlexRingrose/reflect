import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  cover;
  constructor() {
    this.cover = 'blank';
  }

  setCover(cover){
    this.cover = cover;
  }

  getCover(){
    return this.cover;
  }
}
