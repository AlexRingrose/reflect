import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { SimplePdfViewerComponent } from 'simple-pdf-viewer';

import { ShareService } from '../../services/share/share';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component( {
  selector: 'page-preview',
  templateUrl: 'preview.html',
} )

export class PreviewPage {
  @ViewChild( SimplePdfViewerComponent )
  private pdfViewer: SimplePdfViewerComponent;
  coverData;
  paperData;
  goalData;

  constructor ( public navCtrl: NavController, shareServ: ShareService,
    public _sanitizer: DomSanitizer ) {
    // DIABLED FOR TESTING!
    this.coverData = shareServ.coverPage;
    this.paperData = shareServ.paperPage;
    this.goalData = shareServ.goalPage;

    //TEST DATA
    // this.coverData = {
    //   name: "John Smith", id: "82273042",
    //   advisor: "Dr. Ringrose", graduation: "spring 2020",
    //   degree: "BA", concentrations: "GIS",
    //   minor: "Math", email: "john@gmail.com",
    //   address: "293 8th St Apt 2",
    //   cellNum: "858-532-8873", altNum: "858-934-6629",
    //   longAddress: "7023 17th St"
    // }
  }

  pdfObj = null;
  pdfGen = null;
  pdfSrc = null;

  ionViewWillLoad () {
    this.createPdf();
  }

  createPdf () {
    let papersCol1 = '', papersCol2 = '';

    for ( let i = 0; i < this.paperData.paperList.length; i++ ) {
      if(i < Math.ceil(this.paperData.paperList.length / 2)){
        papersCol1 += this.paperData.paperList[ i ] + '\n'+ this.paperData.courseList[ i ].replace( /(\r|\n)/gm, '' ).replace( /\s{2,}/g, '' ) + '\n\n'
      }else{
        papersCol2 += this.paperData.paperList[ i ] + '\n'+ this.paperData.courseList[ i ].replace( /(\r|\n)/gm, '' ).replace( /\s{2,}/g, '' ) + '\n\n'
      }
    }

    let pdfContent = [
      { text: 'History Portfolio', fontSize: 22, bold: true },
      { text: '\nStudent Information', style: 'sectionHeader' },
      {
        style: 'tableExample',
        table: {
          widths: ['25%','55%'],
          body: [
            [
              { text: '', style: 'itemName' },
              { text: '', style: 'itemName' }
            ],
            [ 
              { text: 'Name : ', style: 'itemName' }, 
              { text: this.coverData.name, style: 'body' }
            ],
            [
              { text: 'ID : ', style: 'itemName' },
              { text: this.coverData.id, style: 'body' }
            ],
            [
              { text: 'Advisor : ', style: 'itemName' },
              { text: this.coverData.advisor, style: 'body' }
            ],
            [
              { text: 'Graduation : ', style: 'itemName' },
              { text: this.coverData.graduation, style: 'body' }
            ],
            [
              { text: 'Degree : ', style: 'itemName' },
              { text: this.coverData.degree, style: 'body' }
            ],
            [
              { text: 'Minor : ', style: 'itemName' },
              { text: this.coverData.minor, style: 'body' }
            ],
            [
              { text: 'Concentration(s) : ', style: 'itemName' },
              { text: this.coverData.concentrations, style: 'body' }
            ],
            [
              { text: 'Email : ', style: 'itemName' },
              { text: this.coverData.email, style: 'body' }
            ],
            [
              { text: 'Address : ', style: 'itemName' },
              { text: this.coverData.address, style: 'body' }
            ],
            [
              { text: 'Cell Number : ', style: 'itemName' },
              { text: this.coverData.cellNum, style: 'body' }
            ],
            [
              { text: 'Alt Number : ', style: 'itemName' },
              { text: this.coverData.altNum, style: 'body' }
            ],
            [
              { text: 'Long Term Address : ', style: 'itemName' },
              { text: this.coverData.longAddress, style: 'body' }
            ]
          ]
        },
			  layout: 'lightHorizontalLines'
      },
      {
        text: [
          { text: '\nPapers', style: 'sectionHeader' }
        ],
      },
      {
        columns: [
          {
            text: papersCol1
          },
          {
            text: papersCol2
          }
        ]
      }
    ]


    pdfContent.push( {
      text: 'Student Learning Objectives', style: 'sectionHeader'
    } );

    for ( let i = 1; i < this.goalData.length; i++){
      pdfContent.push( {
        text: [
          { text: 'SLO ' + (i) + ' : ', style: 'itemName'},
          { text: '\t' + this.goalData[ i ].rating, style: 'score' },
          { text: '\n', style: 'body' },
          { text: this.goalData[i].response + '\n\n', style: 'body'}
        ]
      })
    };


    let docDefinition = {
      content: pdfContent,
      styles: {
        sectionHeader: {
          fontSize: 16,
          bold: true,
        },
        subHeader: {
          fontSize: 14,
          bold: true,
        },
        itemName: {
          fontSize: 12,
          bold: true,
        },
        body: {
          fontSize: 12,
        },
        score:{
          fontSize: 14,
          bold: true
        }
      }
    }
    this.pdfGen = pdfMake.createPdf( docDefinition );
    this.pdfGen.getBuffer( ( buffer ) => {
      this.pdfObj = new Uint8Array( buffer );
      this.pdfViewer.openDocument( this.pdfObj );
      this.pdfViewer.firstPage();
      let pdfContainer = document.getElementsByClassName(
        'pdfViewerContainer' )[ 0 ]
      pdfContainer.scrollTop = 0;
      pdfContainer.scrollLeft = 0;
    } )
  }

  nextPage(){
    this.pdfViewer.nextPage()
  }
  backPage(){
    this.pdfViewer.prevPage()
  }

  scrollToBeginning () {
    let pdfContainer = document.getElementsByClassName(
      'pdfViewerContainer' )[ 0 ]
    console.log( pdfContainer )
    pdfContainer.scrollTop = 0;
    pdfContainer.scrollLeft = 0;
  }

  downloadPdf () {
    this.pdfGen.download();
  }

}
