import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ShareService } from '../../services/share/share';

@Component({
  selector: 'page-papers',
  templateUrl: 'papers.html',
})

export class PapersPage{
  validations_form: FormGroup;
  tempServ;
  data;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,public navParams: NavParams, shareServ: ShareService, public httpClient: HttpClient) {
    this.data = this.httpClient.get('src/app/papers/courses.txt').subscribe(data => {
      console.log(data.text());
    })
    this.tempServ = shareServ;
  }
  //let courselist = ['401 Historiography', '499 Special Topics', '497 Internship', '494 Independent Study', '491 Seminar', '460 Modern France Francophone World', '442 Crusades', '440 Comparative Slavery Americas',  '435 Latin America Seminar', '434 History and Multimedia', '430 Native American Social History', '420 Indian People Great Plains', '415 20th C. America', '410 Trans-Mississippi West', '385 Brazil', '380 Mexico', '365 Peoples and Cultures of Native North America', '363 Atlantic History', '352 Medieval and Early Modern Women', '351 Mediterranean World', '350 20th Century Europe', '347 Making of Modern Europe', '343 Medieval Church', '342 Age of the Vikings', '338 South Africa', '337 Imperialism', '336 African American', '328 Tranformation of America', '325 Sectionalism and Civil War', '320 Early Republic', '319 Colonial America', '315 American Women', '299 Special Topics', '261 American Indian History', '251 Public History', '220 North Dakota', 'not listed'];


}
