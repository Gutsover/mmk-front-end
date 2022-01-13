import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-audit-client-card',
  templateUrl: './audit-client-card.component.html',
  styleUrls: ['./audit-client-card.component.scss']
})
export class AuditClientCardComponent implements OnInit {
  @Input()
  client: any = [];

  constructor() {}

  ngOnInit(): void {
  }

}
