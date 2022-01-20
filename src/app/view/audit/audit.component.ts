import {Component, OnInit} from '@angular/core';
import {AuditService} from 'src/app/services/audit.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  auditResult: Array<Object> = [];
  amount: Number = 0;

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {
    this.auditService.getAuditResult().subscribe((res) => {

      //Get the addition
      this.calculateTotal(res);
      this.auditResult = res;
    })
  }

  calculateTotal(results: Array<Object>) {
    results.forEach((client: any) => {
      this.amount += client.sold;
    })
  }

}
