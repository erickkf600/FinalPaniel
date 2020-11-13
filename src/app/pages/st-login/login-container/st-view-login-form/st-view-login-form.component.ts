import { StLoginPresenter } from './../st-login-presenter';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'view-login-form',
  templateUrl: './st-view-login-form.component.html'
})
export class StViewLoginFormComponent implements OnInit {
  public signinFormGroup: FormGroup;
  @Output() loginForm = new EventEmitter();
  constructor(
    public formBuilder: FormBuilder,
    public stLoginPresenter: StLoginPresenter,
  ) { }

  ngOnInit() {
    this.setFormGroups()
  }

  setFormGroups() {
    this.signinFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(120), Validators.required])],
      senha: ['', Validators.required]
    },
    );
  }

  doLogin() {
    if (this.signinFormGroup.valid) {
      let loginData = this.signinFormGroup.value;
      this.loginForm.emit(loginData)
    }
  }

}
