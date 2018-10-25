import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CoverPage } from '../pages/cover/cover';
import { PreviewPage } from '../pages/preview/preview';
import { PapersPage } from '../pages/papers/papers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SimplePdfViewerModule } from 'simple-pdf-viewer';
import { ShareService } from '../services/share/share';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoverPage,
    PreviewPage,
    PapersPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SimplePdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CoverPage,
    PreviewPage,
    PapersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShareService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
