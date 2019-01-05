import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoalViewPage } from '../goal-view/goal-view';


@IonicPage()
@Component( {
  selector: 'page-goals',
  templateUrl: 'goals.html',
} )
export class GoalsPage {
  goals: Array<{ title: string, note: string, data: {} }>;
  goalCount: number;
  goalObj;
  constructor ( public navCtrl: NavController,
    public navParams: NavParams ) {
    this.goalObj = {
      1: {
        description: 'To develop a sense for chronology, change, and continuity as they pertain to history.',
        guide: 'Which papers/projects offer evidence that you have achieved this goal? How does this evidence demonstrate your achievement of the goal? Do you believe you have achieved this goal more fully than is demonstrated by the included papers/ projects ? Explain.',
        rating: [ 'Selected papers/projects draw no connections between historical events and/or periods.', 'Selected papers / projects draw few reasonable and appropriate connections between historical events and / or periods.', 'Selected papers/projects draw some reasonable and appropriate connections between historical events and/or periods.', 'Selected papers/projects clearly draw reasonable and appropriate connections between historical events and/or periods.'
        ]
      },
      2: {
        description: 'NOT IMPLEMENTED',
        guide: 'NOT IMPLEMENTED',
        rating: [ 'NOT IMPLEMENTED', 'NOT IMPLEMENTED',
          'NOT IMPLEMENTED', 'NOT IMPLEMENTED' ]
      },
      3: {
        description: 'NOT IMPLEMENTED',
        guide: 'NOT IMPLEMENTED',
        rating: [ 'NOT IMPLEMENTED', 'NOT IMPLEMENTED',
          'NOT IMPLEMENTED', 'NOT IMPLEMENTED' ]
      },
      4: {
        description: 'NOT IMPLEMENTED',
        guide: 'NOT IMPLEMENTED',
        rating: [ 'NOT IMPLEMENTED', 'NOT IMPLEMENTED',
          'NOT IMPLEMENTED', 'NOT IMPLEMENTED' ]
      },
      5: {
        description: 'NOT IMPLEMENTED',
        guide: 'NOT IMPLEMENTED',
        rating: [ 'NOT IMPLEMENTED', 'NOT IMPLEMENTED',
          'NOT IMPLEMENTED', 'NOT IMPLEMENTED' ]
      }

    }

    this.goals = [];
    this.goalCount = 8;
    for ( let i = 1; i < this.goalCount; i++ ) {
      this.goals.push( {
        title: `Goal ${ i }`,
        note: `This is goal #${ i }`,
        data: this.goalObj[ i ]
      } )
    }

  }

  itemTapped ( event, goal ) {
    this.navCtrl.push( GoalViewPage, { goal: goal } )
  }

}
