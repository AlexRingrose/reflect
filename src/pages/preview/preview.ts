import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { SimplePdfViewerComponent } from  'simple-pdf-viewer';

import { ShareService } from '../../services/share/share';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})

export class PreviewPage {
  @ViewChild(SimplePdfViewerComponent)
  private pdfViewer: SimplePdfViewerComponent;
  coverData;

  constructor(public navCtrl: NavController, shareServ: ShareService,
    public _sanitizer: DomSanitizer)
  {
    // DIABLED FOR TESTING!
    //this.coverData = shareServ.getCover();

    //TEST DATA
    this.coverData = {name: "John Smith", id: "82273042",
     advisor: "Dr. Ringrose", graduation: "spring 2020",
     degree: "BA", concentrations: "GIS",
     minor: "Math", email: "john@gmail.com",
     address : "293 8th St Apt 2",
     cellNum : "858-532-8873", altNum : "858-934-6629",
     longAddress : "7023 17th St"
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
          {text: this.coverData.name, style:'body'}
        ] },
        {text:[
          {text: 'ID : ', style: 'itemName'},
          {text: this.coverData.id, style:'body'}
        ] },
        {text:[
          {text: 'Advisor : ', style: 'itemName'},
          {text: this.coverData.advisor, style:'body'}
        ] },
        {text:[
          {text: 'Graduation : ', style: 'itemName'},
          {text: this.coverData.graduation, style:'body'}
        ] },
        {text:[
          {text: 'Degree : ', style: 'itemName'},
          {text: this.coverData.degree, style:'body'}
        ] },
        {text:[
          {text: 'Minor : ', style: 'itemName'},
          {text: this.coverData.minor, style:'body'}
        ] },
        {text:[
          {text: 'Concentration(s) : ', style: 'itemName'},
          {text: this.coverData.concentrations, style:'body'}
        ] },
        {text:[
          {text: 'Email : ', style: 'itemName'},
          {text: this.coverData.email, style:'body'}
        ] },
        {text:[
          {text: 'Address : ', style: 'itemName'},
          {text: this.coverData.address, style:'body'}
        ] },
        {text:[
          {text: 'Cell Number : ', style: 'itemName'},
          {text: this.coverData.cellNum, style:'body'}
        ] },
        {text:[
          {text: 'Alt Number : ', style: 'itemName'},
          {text: this.coverData.altNum, style:'body'}
        ] },
        {text:[
          {text: 'Long Term Address : ', style: 'itemName'},
          {text: this.coverData.longAddress, style:'body'}
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
    this.pdfGen.getBuffer((buffer)=>{
      this.pdfObj = new Uint8Array(buffer);
      this.pdfViewer.openDocument(this.pdfObj);
      this.pdfViewer.firstPage();
      let pdfContainer = document.getElementsByClassName(
        'pdfViewerContainer')[0]
      pdfContainer.scrollTop = 0;
      pdfContainer.scrollLeft = 0;
    })
  }

  scrollToBeginning(){
    let  pdfContainer  = document.getElementsByClassName(
      'pdfViewerContainer')[0]
    console.log(pdfContainer)
    pdfContainer.scrollTop  =  0;
    pdfContainer.scrollLeft  =  0;
  }

  downloadPdf(){
    this.pdfGen.download();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad PreviewPage')
    console.log(this.coverData);
  }

}
