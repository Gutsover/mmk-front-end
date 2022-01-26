import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-client-identity',
  templateUrl: './modal-advisors-identity.component.html',
  styleUrls: ['./modal-advisors-identity.component.scss'],
})
export class ModalAdvisorsIdentity implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalAdvisorsIdentity>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}
  advisorUpdateForm: any;
  currentAdvisor: any;

  ngOnInit(): void {
    this.currentAdvisor = this.data.currentAdvisor;
    this.advisorUpdateForm = this.fb.group({
      firstName: [this.data.currentAdvisor.firstName, Validators.required],
      name: [this.data.currentAdvisor.name, Validators.required],
      email: [this.data.currentAdvisor.email, Validators.required],
    });
  }

  send() {
    this.dialogRef.close(this.advisorUpdateForm.value);
  }
}
