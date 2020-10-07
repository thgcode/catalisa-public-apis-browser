import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { ViewAPIsComponent } from '../view-apis/view-apis.component';
import { PublicAPIsSearchResults } from '../../models/public-apis-search-results';
import { PublicAPIsService } from '../../services/public-apis.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private viewAPIsComponent: ViewAPIsComponent;
  @ViewChild(ViewAPIsComponent, { static: false }) set content(content: ViewAPIsComponent) {
    if (content) { // Hack to get search when the results component is displayed
      this.viewAPIsComponent = content;
      this.do_search();
    }
  }

  public searchFor: string;
  public searching: boolean;

  constructor(private publicAPIsService: PublicAPIsService) { }

  ngOnInit(): void {
  }

  public do_search(): void {
    this.viewAPIsComponent.errorObject = null;
    const query = {
      title: this.searchFor,
    };
    this.publicAPIsService.searchEntries(query).subscribe(
      (results) => {
        this.viewAPIsComponent.results = results;
      }, (error) => {
        this.viewAPIsComponent.errorObject = error;
        throwError(error);
      }
    );
  }

  public search(): void {
    this.searching = true;
    if (this.viewAPIsComponent) {
      this.do_search();
    }
  }
}
