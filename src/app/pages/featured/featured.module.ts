import { MenuComponent } from './../../shared/components/menu/menu.component';
import { LoaderComponent } from './../../shared/components/loader/loader.component';
import { StFeaturedPresenter } from './featured-container/st-featured-presenter';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedContainerComponent } from './featured-container/featured-container.component';
import { StViewFeaturedsComponent } from './featured-container/st-view-featureds/st-view-featureds.component';

import {
  MatInputModule,
  MatMenuModule,
  MatDialogModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatSortModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTooltipModule,
  MatGridListModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule, 
  MatChipsModule
} from "@angular/material";

const routes: Routes = [
  {
    path: '',
    component: FeaturedContainerComponent
  },
];

@NgModule({
  declarations: [
    FeaturedContainerComponent,
    StViewFeaturedsComponent,
    LoaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers:[
    StFeaturedPresenter
  ]
})
export class FeaturedModule { }
