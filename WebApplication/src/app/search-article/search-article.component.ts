import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {
  @Output() searchClicked = new EventEmitter();
  hideArticles: any = true;
  searchForm: any = {};
  results: any = "";
  data: any = "";
  authorData: any = "";
  authorResults: any = "";
  searchData: any = "";
  searchResults: any = "";
  showSearchForm: boolean = false;
  hideSearchForm: boolean = true;
  showErrorMessage: boolean = false;
  dateCreated: any;
  articleDetailsData: any = [];
  id: number;
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articleService.getSubCategory().subscribe(
      (res: Response) => {
        this.results = res;
        this.data = this.results.entries.entry;
      }
    )

    this.articleService.getAuthorData().subscribe(
      (res: Response) => {
        this.authorResults = res;
        this.authorData = this.authorResults.entries.entry;
      }
    )

  }

  SearchData(): void {
    this.searchClicked.emit(false);
    console.log(this.searchForm);
    this.searchData = null;
    console.log(this.searchData)
    if (this.searchForm.Category != undefined) {
      // this.searchData = "";
      this.articleService.getCategorySearchResults(this.searchForm.Category).subscribe((res: Response) => {
        this.searchResults = res;
        if (this.searchResults.entries.entry != undefined) {
          this.searchData = this.searchResults.entries.entry;
          this.showSearchForm = true;
          console.log(this.searchData);
          this.searchForm.Category = null;
        }else{
          this.showSearchForm = true;
          this.showErrorMessage = true;

        }
      })
    } else if (this.searchForm.Author != undefined) {
      this.articleService.getAuthorSearchResults(this.searchForm.Author).subscribe((res: Response) => {
        this.searchResults = res;
        this.searchData = this.searchResults.entries.entry;
        this.showSearchForm = true;
        console.log(this.searchData);
        this.searchForm.Author = null;
      })
    } else if (this.searchForm.Category != undefined && this.searchForm.Author != undefined) {
      this.articleService.getCategoryAndAuthorSearchResults(this.searchForm.Category, this.searchForm.Author).subscribe((res: Response) => {
        this.searchResults = res;
        this.searchData = this.searchResults.entries.entry;
        this.showSearchForm = true;
        console.log(this.searchData);
        this.searchForm.Category = null;
        this.searchForm.Author = null;
      })
    }
    else {
      this.articleService.getPublishedSearchResults().subscribe((res: Response) => {
        this.searchResults = res;
        this.searchData = this.searchResults.entries.entry;
        // this.dateCreated = this.SearchData.dateCreated;
        this.showSearchForm = true;
        console.log(this.searchData);
      })
    }

  }

  showArticles() {
    this.searchClicked.emit(true);
    this.hideSearchForm = false;
  }
  getArticleDetail(articleID) {
    this.id = articleID;
    this.articleService.saveInSessionStorage("articleID", this.id);
    this.router.navigate(['./viewArtcile']);
  }
}
