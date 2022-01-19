import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-new-client',
  templateUrl: './create-new-client.component.html',
  styleUrls: ['./create-new-client.component.scss'],
})
export class CreateNewClientComponent implements OnInit {
  submitted = false;
  isEnterprise = false;

  constructor(private fb: FormBuilder, private clientService: ClientService) {}

  clientForm = this.fb.group({
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    siretNbr: [''],
    entrepriseName: [''],
    birth: ['', Validators.required],
    streetNumber: ['', Validators.required],
    streetName: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  ngOnInit(): void {
    console.log('Helloe');
  }

  submit() {
    if (this.clientForm.dirty && this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value).subscribe();
      this.submitted = true;
    } else {
      console.log('Nope');
    }
  }

  ClientIsEnterprise() {
    this.isEnterprise = true;
  }

  ClientIsParticular() {
    this.isEnterprise = false;
  }

  get name(): any {
    return this.siretNbr.get('name');
  }
  get firstname(): any {
    return this.firstname.get('firstName');
  }

  get siretNbr(): any {
    return this.siretNbr.get('siretNbr');
  }
  get entrepriseName(): any {
    return this.entrepriseName.get('entrepriseName');
  }
  get birth(): any {
    return this.birth.get('birth');
  }
  get streetNumber(): any {
    return this.streetNumber.get('streetNumber');
  }
  get streetName(): any {
    return this.streetName.get('streetName');
  }
  get city(): any {
    return this.city.get('city');
  }
  get zipCode(): any {
    return this.zipCode.get('zipCode');
  }
}
