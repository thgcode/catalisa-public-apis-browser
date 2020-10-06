import { Component, OnInit } from '@angular/core';

import { PublicAPIsSearchResults } from '../../models/public-apis-search-results';

@Component({
  selector: 'app-view-apis',
  templateUrl: './view-apis.component.html',
  styleUrls: ['./view-apis.component.css']
})
export class ViewAPIsComponent implements OnInit {
  public results: PublicAPIsSearchResults;
  public errorObject;

  constructor() { }

  ngOnInit(): void {
  }
}
