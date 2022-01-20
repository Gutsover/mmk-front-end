import { Inject, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-client-identity',
  templateUrl: './modal-client-identity.component.html',
  styleUrls: ['./modal-client-identity.component.scss'],
})
export class ModalClientIdentityComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalClientIdentityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  currentClient: any;

  clientUpdateForm: any;

  ngOnInit(): void {
    this.currentClient = this.data.currentClient;
    this.clientUpdateForm = this.fb.group({
      firstname: [this.data.currentClient.firstname, Validators.required],
      name: [this.data.currentClient.name, Validators.required],
      birth: [this.data.currentClient.birth, Validators.required],
      streetName: [
        this.data.currentClient.address.streetName,
        Validators.required,
      ],
      phoneNumber: [this.data.currentClient.phoneNumber, Validators.required],
      streetNumber: [
        this.data.currentClient.address.streetNumber,
        Validators.required,
      ],
      city: [this.data.currentClient.address.city, Validators.required],
      zipCode: [this.data.currentClient.address.zipCode, Validators.required],
    });
  }
  closeModal() {
    this.dialogRef.close();
  }
  sendData() {
    if (this.clientUpdateForm.dirty && this.clientUpdateForm.valid) {
      this.dialogRef.close(this.clientUpdateForm.value);
    } else {
      return;
    }
  }

  get firstname(): any {
    return this.clientUpdateForm.get('firstname');
  }
  get name(): any {
    return this.clientUpdateForm.get('name');
  }
  get birth(): any {
    return this.clientUpdateForm.get('birth');
  }
  get streetName(): any {
    return this.clientUpdateForm.get('streetName');
  }
  get streetNumber(): any {
    return this.clientUpdateForm.get('streetNumber');
  }
  get phoneNumber(): any {
    return this.clientUpdateForm.get('phoneNumber');
  }
  get city(): any {
    return this.clientUpdateForm.get('city');
  }
  get zipCode(): any {
    return this.clientUpdateForm.get('zipCode');
  }
}
