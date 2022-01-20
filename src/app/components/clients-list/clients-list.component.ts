import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  @Input()
  userList: any;
  selectedItem: any = null;

  constructor(public clientService: ClientService) {}

  @Output()
  clientupdate: EventEmitter<any> = new EventEmitter();

  updateClientInfo(id: number) {
    this.clientupdate.emit(id);
    this.selectedItem = id;
  }

  ngOnInit(): void {}
}
