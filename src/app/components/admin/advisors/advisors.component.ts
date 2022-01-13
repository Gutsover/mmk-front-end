import { Component, OnInit } from '@angular/core';
import { AdvisorsService } from 'src/app/services/advisors.service';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss'],
})
export class AdvisorsComponent implements OnInit {
  advisors: any;
  selectedItem: any = null;
  currentUserId: any = null;
  constructor(private advisorsService: AdvisorsService) {}

  updateAdvisorInfo(id: any): void {
    console.log(id);
    this.currentUserId = id;
    this.selectedItem = id;
  }

  ngOnInit(): void {
    this.advisorsService.getAdvisors().subscribe((data) => {
      this.advisors = data;
    });
  }
}
