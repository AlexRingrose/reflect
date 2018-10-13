import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    this.serviceData = {name: "John Smith", id: "82273042",
     advisor: "Dr. Ringrose", graduation: "spring 2020",
     degree: "BA", concentrations: "GIS",
     minor: "Math"
    }
  }

  pdfObj = null;
  pdfGen = null;
  pdfSrc = null;

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
          {text: 'ID : ', style: 'itemName'},
          {text: this.serviceData.id, style:'body'}
        ] },
        {text:[
          {text: 'Advisor : ', style: 'itemName'},
          {text: this.serviceData.advisor, style:'body'}
        ] },
        {text:[
          {text: 'Degree : ', style: 'itemName'},
          {text: this.serviceData.degree, style:'body'}
        ] },
        {text:[
          {text: 'Minor : ', style: 'itemName'},
          {text: this.serviceData.minor, style:'body'}
        ] },
        {text:[
          {text: 'Concentration(s) : ', style: 'itemName'},
          {text: this.serviceData.concentrations, style:'body'}
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
    this.pdfGen = pdfMake.createPdf(docDefinition);
    this.pdfGen.getBlob((blob)=>{
      this.pdfObj = blob;
      this.pdfSrc = URL.createObjectURL(this.pdfObj);
      console.log(blob)
      console.log(this.pdfSrc)
    });
  }



  downloadPdf(){
    this.pdfGen.download();
  }
  openPdf(){
    this.pdfGen.open({},window);
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad PreviewPage')
    console.log(this.serviceData);
  }

}
