import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PublicAPIsService } from '../../services/public-apis.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories$: Observable <string []>;
  public errorObject;
  private baseCategoryViewURL: string = 'category/';

  constructor(private publicAPIsService: PublicAPIsService) { }

  ngOnInit(): void {
    document.getElementById('content').focus();
  this.errorObject = null;
    this.categories$ = this.publicAPIsService.getCategories().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      }
    ));
  }

  public getCategoryViewURL(category: string): string {
    return this.baseCategoryViewURL + encodeURI(category);
  }
}
