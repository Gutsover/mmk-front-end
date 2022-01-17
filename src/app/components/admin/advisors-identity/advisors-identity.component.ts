import { Component, OnInit } from '@angular/core';
import { ModalAdvisorsIdentity } from '../../modals/modal-advisors-identity/modal-advisors-identity.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAdvisorComponent } from '../../modals/delete-advisor/delete-advisor.component';

@Component({
  selector: 'app-advisors-identity',
  templateUrl: './advisors-identity.component.html',
  styleUrls: ['./advisors-identity.component.scss'],
})
export class AdvisorsIdentityComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openModalUpdateAdvisor() {
    const dialogRef = this.dialog.open(ModalAdvisorsIdentity);
  }

  deleteAdvisor() {
    const dialogRef = this.dialog.open(DeleteAdvisorComponent);
  }

  ngOnInit(): void {}
}
