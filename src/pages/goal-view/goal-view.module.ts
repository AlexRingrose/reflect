import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalViewPage } from './goal-view';

@NgModule({
  declarations: [
    GoalViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalViewPage),
  ],
})
export class GoalViewPageModule {}
