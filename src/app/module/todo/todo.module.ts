import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
