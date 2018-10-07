import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  name: string;
  //id: {};

  constructor() {
    this.name = 'blank';
  }

  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
}
