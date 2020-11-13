import { LoadingService } from './../../../shared/services/loading.service';
import { StFeaturedPresenter } from './st-featured-presenter';
import { UniversalService } from './../../../services/universal.service';
import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-featured-container',
  templateUrl: './featured-container.component.html'
})
export class FeaturedContainerComponent implements OnInit {
  protected subsink = new SubSink();
  public featured: Array<any> = [];
  public internalLoader: boolean= true;
  constructor(
    protected universalService: UniversalService,
    protected stFeaturedPresenter: StFeaturedPresenter,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.serviceSubscriptions()
    this.loadingService.startInternalLoading();
    this.loadingService.isLoadingInternal.subscribe(
      response => {
        setTimeout(() => {
          this.internalLoader = response;
        }, 500);
      },
      error => {
        console.log(error);
      },
      () => {}
      );
  }

  /**
   * Se inscreve aos Serviços
   */
   serviceSubscriptions() {
    this.subsink.add(
      this.stFeaturedPresenter.setData$.subscribe(_bool => {
       this.getFeatureds(_bool)
      }),
      
    )
  }
  getFeatureds(bool){
    if(bool){
      let param = 'destaques'
      this.universalService.getData(param).subscribe(
        response =>{
          if (response.res) {
            this.featured = response.res;       
          }
        }
      )

    }
  }


}
