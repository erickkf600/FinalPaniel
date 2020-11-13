import { Observable, Subject, BehaviorSubject } from "rxjs";

export class StLoginPresenter {

    private _login: Subject<any> = new BehaviorSubject(null);
    readonly isValid$: Observable<any> = this._login.asObservable();

    constructor() { }

    /**
     * Retorno
     * 
     * @param _bool Boleano
     */
    isValid(_bool) {
        this._login.next(_bool);
    }
}
