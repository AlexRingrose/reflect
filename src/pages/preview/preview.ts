import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';

import { ShareService } from '../../services/share/share';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  serviceData;

  constructor(public navCtrl: NavController, shareServ: ShareService)
  {
    // DIABLED FOR TESTING!
    //this.serviceData = shareServ.getCover();

    //TEST DATA
    this.serviceData = {name: "Bob Howard", id: "66615666",
     advisor: "Dr. Angleton", graduation: "spring NEVER",
     degree: "BS", concentrations: "demonology",
     minor: "spy stuff"
    }
  }
  pdfObj = null;
  ionViewWillLoad(){
    this.createPdf();
  }

  createPdf(){
    let docDefinition = {
      content:[
        {text: 'History Portfolio', fontSize: 18,bold: true},
        {text: 'Cover Page', style: 'sectionHeader'},
        {text:[
          {text: 'Name : ', style: 'itemName'},
          {text: this.serviceData.name, style:'body'}
        ] },
        {text:[
          {text: 'ID : ', bold: true}, this.serviceData.id
        ] },

      ],
      styles:{
        sectionHeader: {
          fontSize: 16,
          bold: true,
        },
        itemName: {
          fontSize: 12,
          bold: true,
        },
        body: {
          fontSize: 12,
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf(){
    this.pdfObj.download();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad PreviewPage')
    console.log(this.serviceData);
  }

}
