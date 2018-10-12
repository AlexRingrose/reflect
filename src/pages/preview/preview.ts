import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';

import { ShareService } from '../../services/share/share';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  serviceData;

  constructor(public navCtrl: NavController, shareServ: ShareService,
    private plt: Platform, private file: File,
    private fileOpener: FileOpener)
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
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'portfolio.pdf',
        blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'portfolio.pdf',
          'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
    this.pdfObj.download();
    }
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad PreviewPage')
    console.log(this.serviceData);
  }

}
