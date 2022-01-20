import { Component, Input, OnInit } from '@angular/core';
import { AdvisorsService } from 'src/app/services/advisors.service';

@Component({
  selector: 'app-advisors-list',
  templateUrl: './advisors-list.component.html',
  styleUrls: ['./advisors-list.component.scss'],
})
export class AdvisorsListComponent implements OnInit {

  @Input()
  currentAdvisorId: number = 1;

  advisors: any;

  constructor(private advisorService: AdvisorsService) {}

  ngOnInit(): void {
    this.advisorService.getAdvisors().subscribe((res) => (this.advisors = res));
  }

  updateAdvisorInfo(id: any): void {
    this.currentAdvisorId = id;
  }


}
