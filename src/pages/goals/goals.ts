import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoalViewPage } from '../goal-view/goal-view';
import { ShareService } from '../../services/share/share';

@Component( {
  selector: 'page-goals',
  templateUrl: 'goals.html',
} )
export class GoalsPage {
  goals: Array<{ num: number, slug: string, title: string, data: {} }>;
  goalCount: number;
  goalObj: any;

  constructor ( public shareServ: ShareService,
    public navCtrl: NavController,
    public navParams: NavParams ) {

    this.goalObj = shareServ.importData.goalData;

    this.goals = [];

    for ( let i = 1; i < shareServ.goalNumber + 1; i++ ) {
      this.goals.push( {
        num: i,
        slug: `SLO ${ i }`,
        title: `${ this.goalObj[ i ].title }`,
        data: this.goalObj[ i ]
      } )
    }

  }

  itemTapped ( event, goal ) {
    this.navCtrl.push( GoalViewPage, { goal: goal } )
  }

}
