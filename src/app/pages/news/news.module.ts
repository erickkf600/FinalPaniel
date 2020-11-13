import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StNewsContainerComponent } from './st-news-container/st-news-container.component';

const routes: Routes = [
  {
    path: '',
    component: StNewsContainerComponent
  },
];

@NgModule({
  declarations: [
    StNewsContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NewsModule { }
