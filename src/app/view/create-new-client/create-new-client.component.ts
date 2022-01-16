import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-client',
  templateUrl: './create-new-client.component.html',
  styleUrls: ['./create-new-client.component.scss'],
})
export class CreateNewClientComponent implements OnInit {
  submitted = false;

  isEnterprise = false;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.submitted = true;
  }

  ClientIsEnterprise() {
    this.isEnterprise = true;
  }

  ClientIsParticular() {
    this.isEnterprise = false;
  }
}
