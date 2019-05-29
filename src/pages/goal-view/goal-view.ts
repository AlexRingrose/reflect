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
  goalNum;
  constructor ( public _share: ShareService, public navCtrl: NavController, public navParams: NavParams ) {
    this.selectedGoal = navParams.get( 'goal' );
    this.data = this.selectedGoal.data;
    this.goalNum = this.selectedGoal.num;
  }

  ionViewDidLeave () {
    this._share.saveData();
  }

}
