import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PublicAPIsHealthStatus } from '../../models/public-apis-health-status';
import { PublicAPIsService } from '../../services/public-apis.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  public statusMessage: string;

  constructor(private publicAPIsService: PublicAPIsService) { }

  ngOnInit(): void {
    this.statusMessage = 'Checking API status...';
    this.publicAPIsService.getAPIHealthStatus().subscribe(
      (status: PublicAPIsHealthStatus) => {
        if (status.alive)
          this.statusMessage = 'Public APIs is alive.';
        else
          this.statusMessage = 'Public APIs is not alive.';
      }, (error) => {
        this.statusMessage = `Error occurred while checking the API status: ${error.message}`;
      }
    );
  }
}
