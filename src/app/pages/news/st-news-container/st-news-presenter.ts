import { Observable, Subject, BehaviorSubject } from "rxjs";

export class StNewsPresenter {

    private _login: BehaviorSubject<any[]> = new BehaviorSubject(null);
    readonly setLogin$: Observable<any[]> = this._login.asObservable();

    constructor() { }

    /**
     * Retorno
     * 
     * @param _bool Boleano
     */
    setLogin(_bool) {
        this._login.next(_bool);
    }


}
