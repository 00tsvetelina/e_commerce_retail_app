import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { 
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [
    AppComponent,
    MessageComponent
  ]
})
export class MessageModule { }
