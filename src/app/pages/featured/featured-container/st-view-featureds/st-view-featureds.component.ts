import { LoadingService } from './../../../../shared/services/loading.service';
import { StFeaturedPresenter } from './../st-featured-presenter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'st-view-featureds',
  templateUrl: './st-view-featureds.component.html'
})
export class StViewFeaturedsComponent implements OnInit {

  @Input() featured: any
  @Input() internalLoader: boolean

  constructor(
    protected stFeaturedPresenter: StFeaturedPresenter,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.stFeaturedPresenter.setData(true);
    this.loadingService.finishInternalLoading();
  }
  

}
