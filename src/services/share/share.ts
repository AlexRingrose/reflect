import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  name: string;
  //id: {};

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
