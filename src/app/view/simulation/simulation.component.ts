import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  @Input()
  montant: any = null;
  duree: any = null;
  interet: any = null;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<SimulationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  simulationForm: any = null;

  ngOnInit(): void {
    this.simulationForm = this.fb.group({
      montant: ['', Validators.required],
      duree: ['', Validators.required],
      interet: ['', Validators.required]
    });
  }

  submit(){
    if (this.simulationForm.dirty && this.simulationForm.valid) {
      this.dialogRef.close(this.simulationForm.value);
      console.log("IF");
    }
    else {
      console.log("ELSE");
      return;
    }
  }

}
