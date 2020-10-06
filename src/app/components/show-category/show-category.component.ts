import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ViewAPIsComponent } from '../view-apis/view-apis.component';
import { PublicAPIsSearchResults } from '../../models/public-apis-search-results';
import { PublicAPIsService } from '../../services/public-apis.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  public category: string;
  public errorObject;

  @ViewChild(ViewAPIsComponent)
  private viewAPIsComponent: ViewAPIsComponent;

  constructor(private route: ActivatedRoute, private publicAPIsService: PublicAPIsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = decodeURI(params['category']);
      this.search();
    });
  }

  private search() {
    this.errorObject = null;
    this.publicAPIsService.searchEntries({category: this.category}).subscribe(
      (results) => {
        this.viewAPIsComponent.results = results;
      }, (error) => {
        this.errorObject = error;
      }
    );
  }
}
