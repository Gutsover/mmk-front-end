import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-new-client',
  templateUrl: './create-new-client.component.html',
  styleUrls: ['./create-new-client.component.scss'],
})
export class CreateNewClientComponent implements OnInit {
  submitted = false;
  isEnterprise = false;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {}

  clientForm = this.fb.group({
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    siretNbr: [''],
    enterpriseName: [''],
    birth: ['', Validators.required],
    streetNumber: ['', Validators.required],
    streetName: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit() {
    if (this.clientForm.dirty && this.clientForm.valid) {
      const newClientInfo = {
        ...this.clientForm.value,
        isEnterprise: this.isEnterprise,
      };
      this.clientService.createClient(newClientInfo).subscribe(
        (res) => {
          this.router.navigate(['/client']);
        },
        (err) => {
          console.log(err);
        }
      );
      this.submitted = true;
    } else {
      console.log('form not valid');
    }
  }

  ClientIsEnterprise() {
    this.isEnterprise = true;
  }

  ClientIsParticular() {
    this.isEnterprise = false;
  }

  get name(): any {
    return this.clientForm.get('name');
  }
  get firstname(): any {
    return this.clientForm.get('firstName');
  }

  get siretNbr(): any {
    return this.clientForm.get('siretNbr');
  }
  get enterpriseName(): any {
    return this.clientForm.get('enterpriseName');
  }
  get birth(): any {
    return this.clientForm.get('birth');
  }
  get streetNumber(): any {
    return this.clientForm.get('streetNumber');
  }
  get streetName(): any {
    return this.clientForm.get('streetName');
  }
  get city(): any {
    return this.clientForm.get('city');
  }
  get zipCode(): any {
    return this.clientForm.get('zipCode');
  }
}
