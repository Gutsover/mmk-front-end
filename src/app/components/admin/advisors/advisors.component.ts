import { Component, OnInit } from '@angular/core';
import { AdvisorsService } from 'src/app/services/advisors.service';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss'],
})
export class AdvisorsComponent implements OnInit {
  advisors: any;
  constructor(private advisorsService: AdvisorsService) {}

  ngOnInit(): void {
    this.advisorsService.getAdvisors().subscribe((data) => {
      this.advisors = data;
    });
  }
}
