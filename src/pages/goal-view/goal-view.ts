import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../services/share/share';

@IonicPage()
@Component( {
  selector: 'page-goal-view',
  templateUrl: 'goal-view.html',
} )
export class GoalViewPage {
  selectedGoal: any;
  data: {};
  rating;
  response;
  serv;
  constructor ( public shareServ: ShareService, public navCtrl: NavController, public navParams: NavParams ) {
    this.serv = shareServ;
    this.selectedGoal = navParams.get( 'goal' );
    this.data = this.selectedGoal.data;
  }

  ionViewDidLoad () {
    console.log( this.selectedGoal.data )
    console.log( 'ionViewDidLoad GoalViewPage' );
  }

}
