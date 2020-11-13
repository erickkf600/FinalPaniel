import { Observable, Subject, BehaviorSubject } from "rxjs";

export class StFeaturedPresenter {

    private _getData: BehaviorSubject<any[]> = new BehaviorSubject(null);
    readonly setData$: Observable<any[]> = this._getData.asObservable();

    constructor() { }

    /**
     * Retorno
     * 
     * @param _bool Boleano
     */
    setData(_bool) {
        this._getData.next(_bool);
    }


}
