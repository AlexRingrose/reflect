import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor ( public navCtrl: NavController, public navParams: NavParams ) {
    this.selectedGoal = navParams.get( 'goal' );
    this.data = this.selectedGoal.data;
  }

  ionViewDidLoad () {
    console.log( this.selectedGoal.data )
    console.log( 'ionViewDidLoad GoalViewPage' );
  }

}
