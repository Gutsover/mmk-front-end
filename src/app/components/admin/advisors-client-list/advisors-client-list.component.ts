import { Component, OnInit } from '@angular/core';
import { AdvisorsService } from 'src/app/services/advisors.service';

@Component({
  selector: 'app-advisors-client-list',
  templateUrl: './advisors-client-list.component.html',
  styleUrls: ['./advisors-client-list.component.scss'],
})
export class AdvisorsClientListComponent implements OnInit {
  clients: any = [];

  constructor(private advisorService: AdvisorsService) {}

  ngOnInit(): void {
    this.advisorService.advisor$.subscribe((res) => {
      console.log(res);
      this.clients = res.clients;
    });
  }
}
