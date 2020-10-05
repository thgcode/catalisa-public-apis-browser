import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PublicAPIsHealthStatus } from '../../models/public-apis-health-status';
import { PublicAPIsService } from '../../services/public-apis.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  public errorObject;
  public status$: Observable <PublicAPIsHealthStatus>;

  constructor(private publicAPIsService: PublicAPIsService) { }

  ngOnInit(): void {
    this.errorObject = null;
    this.status$ = this.publicAPIsService.getAPIHealthStatus().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      }
    ));
  }
}
