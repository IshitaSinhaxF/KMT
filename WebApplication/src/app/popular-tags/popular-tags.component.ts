import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { SearchArticleComponent } from '../search-article/search-article.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css']
})
export class PopularTagsComponent implements OnInit {
@Output() searchClicked = new EventEmitter;
@Output() hideSearchForm = new EventEmitter;
@Output() showErrorMessage = new EventEmitter;
@Output() hideHomeButton = new EventEmitter;
data: any = "";
results: any = "";
tagSelected:any;
component :SearchArticleComponent;
  constructor(private articleService: ArticleService, private router : Router) { }

  ngOnInit() {

      this.articleService.getPopularTags().subscribe((res:Response)=>{
        this.results = res;
        this.data=this.results.entries.entry;
        //console.log(this.data);
      })
  }
  
  takeToSearch(TagName: string)
  { 
    this.component = new SearchArticleComponent(this.articleService, this.router)
    this.tagSelected = TagName;
    console.log(this.tagSelected);
     this.articleService.saveInSessionStorage("Tags", this.tagSelected);
  //    this.searchClicked.emit(true);
  //   this.hideSearchForm.emit(false);
  //   this.showErrorMessage.emit(false);
  //  // this.hideAdvancedSerachForm = false;
  //   this.hideHomeButton.emit(false);

  this.component.SearchData();
     
  }

}
