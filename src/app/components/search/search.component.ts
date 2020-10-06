import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { ViewAPIsComponent } from '../view-apis/view-apis.component';
import { PublicAPIsSearchResults } from '../../models/public-apis-search-results';
import { PublicAPIsService } from '../../services/public-apis.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild(ViewAPIsComponent)
  private viewAPIsComponent: ViewAPIsComponent;

  public searchFor: string;
  public searching: boolean;
  public errorObject;

  constructor(private publicAPIsService: PublicAPIsService) { }

  ngOnInit(): void {
    this.searching = false;
  }

  public search() {
    this.errorObject = null;
    this.searching = true;
    let query = {
      title: this.searchFor,
    };
    this.publicAPIsService.searchEntries(query).subscribe(
      (results) => {
        this.viewAPIsComponent.results = results;
      }, (error) => {
        this.errorObject = error;
      }
    );
  }
}
