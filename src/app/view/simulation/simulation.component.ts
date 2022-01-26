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

  loyerTotal: any = null;
  mensualite: any = null;
  coutCredit: any = null;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
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
    if (this.simulationForm.dirty && this.simulationForm.valid && this.interet > 0 && this.duree > 0 && this.montant > 0 ) {
      console.log("IF");
      return this.simulation(this.interet, this.duree, this.montant);
    }
    else {
      console.log("je n'ai pas ma place.");
    }
  }

  simulation(tauxInteretAnnuel: number, duree: number, montant: number) {
    tauxInteretAnnuel /= 100;
    let interetMensuel = tauxInteretAnnuel / 12; // Taux annuel divisé par le nombre de mois dans une année...
    this.mensualite = montant * ((interetMensuel * (Math.pow(1 + interetMensuel, duree)))
      / ((Math.pow(1 + interetMensuel, duree)) - 1));
    this.loyerTotal = (this.mensualite * duree);
    this.coutCredit = this.loyerTotal - montant;

    console.log("Interet total = " + this.loyerTotal
      + "     -     Mensualités = " + this.mensualite
      + "     -     Coût du crédit = " + this.coutCredit);

  }

}
