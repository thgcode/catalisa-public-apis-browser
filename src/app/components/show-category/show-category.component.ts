import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ViewAPIsComponent } from '../view-apis/view-apis.component';
import { PublicAPIsSearchQuery } from '../../models/public-apis-search-query';
import { PublicAPIsSearchResults } from '../../models/public-apis-search-results';
import { PublicAPIsService } from '../../services/public-apis.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  public category: string;

  private viewAPIsComponent: ViewAPIsComponent;
  @ViewChild(ViewAPIsComponent, { 'static': false }) set content(content: ViewAPIsComponent) {
    if(content) { // Hack to get search when the results component is displayed
      this.viewAPIsComponent = content;
      this.search();
    }
  }

  constructor(private route: ActivatedRoute, private publicAPIsService: PublicAPIsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = decodeURI(params['category']);
    });
  }

  private search() {
    this.viewAPIsComponent.errorObject = null;
    let query: PublicAPIsSearchQuery = {};
    if (this.category != 'All') {
      query.category = this.category;
    }
    this.publicAPIsService.searchEntries(query).subscribe(
      (results) => {
        this.viewAPIsComponent.results = results;
      }, (error) => {
        this.viewAPIsComponent.errorObject = error;
      }
    );
  }
}
