import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl }
  from '@angular/forms';

import { ShareService } from '../../services/share/share';

@Component({
  selector: 'page-papers',
  templateUrl: 'papers.html',
})

export class PapersPage{
  public courseList = [];
  //Ideally seperate this into .txt and import or somthing
  public courseAry = ['401 Historiography', '499 Special Topics',
  '497 Internship', '494 Independent Study', '491 Seminar',
  '460 Modern France Francophone World', '442 Crusades',
  '440 Comparative Slavery Americas',  '435 Latin America Seminar',
  '434 History and Multimedia', '430 Native American Social History',
  '420 Indian People Great Plains', '415 20th C. America',
  '410 Trans-Mississippi West', '385 Brazil', '380 Mexico',
  '365 Peoples and Cultures of Native North America', '363 Atlantic History',
  '352 Medieval and Early Modern Women', '351 Mediterranean World',
  '350 20th Century Europe', '347 Making of Modern Europe',
  '343 Medieval Church', '342 Age of the Vikings', '338 South Africa',
  '337 Imperialism', '336 African American', '328 Tranformation of America',
  '325 Sectionalism and Civil War', '320 Early Republic',
  '319 Colonial America', '315 American Women', '299 Special Topics',
  '261 American Indian History', '251 Public History', '220 North Dakota',
  'not listed'];

  papers_form: FormGroup;
  tempServ;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,
    public navParams: NavParams, shareServ: ShareService)
  {
    this.courseList
    for(let i=0;i<this.courseAry.length;i++){
      this.courseList.push(this.courseAry[i])
        // ,values:this.courseAry[i].substr(0,3)})
    }
    this.tempServ = shareServ;
  }

  ionViewWillLoad(){
    this.papers_form = this.formBuilder.group({
      course1: new FormControl('',),
      paper1: new FormControl('',),
      course2: new FormControl('',),
      paper2: new FormControl('',),
      course3: new FormControl('',),
      paper3: new FormControl('',),
      course4: new FormControl('',),
      paper4: new FormControl('',),
      course5: new FormControl('',),
      paper5: new FormControl('',),
      course6: new FormControl('',),
      paper6: new FormControl('',),
      course7: new FormControl('',),
      paper7: new FormControl('',),
      course8: new FormControl('',),
      paper8: new FormControl('',),
    })
  }


  onSubmit(values){
    console.log(values)
    this.tempServ.setPapers(values)
  }
}
