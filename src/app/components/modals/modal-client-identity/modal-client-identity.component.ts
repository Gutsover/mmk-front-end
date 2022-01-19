import { Inject, Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-client-identity',
  templateUrl: './modal-client-identity.component.html',
  styleUrls: ['./modal-client-identity.component.scss'],
})
export class ModalClientIdentityComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalClientIdentityComponent>) {}

  @Input()
  firstname: string = '';
  lastname: string = '';
  birthdate: any = null;
  address: string = '';
  city: string = '';
  postcode: Number = 0;

  ngOnInit(): void {}
  closeModal() {
    this.dialogRef.close();
  }
  sendData() {
    const dialogConfig = new MatDialogConfig();
    if (this.firstname !== '') {
      this.dialogRef.close({
        firstname: this.firstname,
        lastname: this.lastname,
        birthdate: this.birthdate,
        address: this.address,
        city: this.city,
        postcode: this.postcode,
      });
    } else {
      this.dialogRef.close();
    }
  }
}
