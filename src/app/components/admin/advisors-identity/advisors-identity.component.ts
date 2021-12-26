import { Component, OnInit } from '@angular/core';
import { ModalAdvisorsIdentity } from '../../modals/modal-advisors-identity/modal-advisors-identity.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-advisors-identity',
  templateUrl: './advisors-identity.component.html',
  styleUrls: ['./advisors-identity.component.scss'],
})
export class AdvisorsIdentityComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openModalUpdateClient() {
    const dialogRef = this.dialog.open(ModalAdvisorsIdentity);
  }
  ngOnInit(): void {}
}
