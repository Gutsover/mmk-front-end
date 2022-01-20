import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-modal-client-identity',
  templateUrl: './modal-advisors-identity.component.html',
  styleUrls: ['./modal-advisors-identity.component.scss'],
})
export class ModalAdvisorsIdentity implements OnInit {

  constructor(private fb: FormBuilder) {}
  advisorUpdateForm : any;

  

  ngOnInit(): void {
    this.advisorUpdateForm = this.fb.group({
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  send() {

  }
}


