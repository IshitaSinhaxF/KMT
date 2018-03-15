import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {
  @Output() searchClicked = new EventEmitter();
  @Output() showViewArticle = new EventEmitter();
  @Output() showSearchForms = new EventEmitter();
  @Output() eyeClickedArticle = new EventEmitter();
  @Output() eyeClickedReviewArticle = new EventEmitter();
  @Output() eyeClickedDraftArticle = new EventEmitter();
  @Output() eyeClickedPendingArticle = new EventEmitter();

  hideArticles: any = true;
  searchForm: any = {};
  results: any = "";
  data: any = "";
  authorData: any = "";
  authorResults: any = "";
  searchData: any = "";
  searchResults: any = "";
  showSearchForm: boolean = false;
  hideSearchForm: boolean = false;
  hideAdvancedSerachForm: boolean = true;
  showErrorMessage: boolean = false;
  hideHomeButton: boolean= false;
  isCollapsed:boolean = true;
  dateCreated: any;
  articleDetailsData: any = [];
  searchQuery: any ;
  id: number;
  //isCollapsed : boolean = false;
  fromDate: any;
  toDate: any ;
  Tags:any;
  

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() { 
    
    this.articleService.getSubCategory().subscribe(
      (res: Response) => {
        this.results = res;
        this.data = this.results.entries.entry;
        this.isCollapsed = true;
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

  this.Tags = this.articleService.getFromSessionStorage("Tags") ;
  
  if(this.Tags !=  null)
  {
    this.searchForm.articleContent = this.Tags;
    this.articleService.removeFromSessionStorage("Tags") ;
    // this.eyeClickedArticle.emit(false);
    // this.eyeClickedReviewArticle.emit(false);
    // this.eyeClickedDraftArticle.emit(false);
    // this.eyeClickedPendingArticle.emit(false);
    
  }
  else{
//  console.log('failed');
  }
    this.searchClicked.emit(false);
    this.hideHomeButton=true;
    this.hideAdvancedSerachForm = true;
    //console.log(this.searchForm);
    this.searchData = null;
    //console.log(this.searchData) 
    let searchQuery = '1=1 '
    //console.log(this.fromDate)
    //console.log(this.toDate)
    if ( this.fromDate != undefined && this.toDate != undefined )
     {
       let searchDateQuery = ' art."dateCreated" :: date between \'' + this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day + '\' and \'' + this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day + '\'';
            
      if(searchQuery)
       {
         searchQuery = searchQuery + ' and ' + searchDateQuery;
          //console.log('in text:'+searchQuery);
       }
       else
       {
         searchQuery = searchDateQuery;
       }       
     }
     if ( this.fromDate != undefined && (this.toDate == undefined  || this.toDate == null))
     {
       let searchFrmQuery = ' art."dateCreated" :: date between \'' + this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day + '\' and current_timestamp ;'      
        if(searchQuery)
       {
         searchQuery = searchQuery + ' and ' + searchFrmQuery;          
       }
       else
       {
         searchQuery = searchFrmQuery;
       }     
     }
     if ( (this.fromDate == undefined || this.fromDate == null) && this.toDate != undefined )
     {
       let searchToQuery = ' art."dateCreated" :: date between current_timestamp and \'' + this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day + '\''; 
        if(searchQuery)
       {
         searchQuery = searchQuery + ' and ' + searchToQuery;          
       }
       else
       {
         searchQuery = searchToQuery;
       }     
     }     
    if ( this.searchForm.Approver != undefined && this.searchForm.Approver != 0 )
     {
       let searchAprQuery = ' apr."userID" = ' + this.searchForm.Approver ; 
      if(searchQuery)
       {
         searchQuery = searchQuery + ' and ' + searchAprQuery;
          //console.log('in text:'+searchQuery);
       }
       else
       {
         searchQuery = searchAprQuery;
       }
     }
     if ( this.searchForm.Author != undefined && this.searchForm.Author != 0 )
     {
       let searchAutQuery = 'usr."userID" = ' + +this.searchForm.Author 
       if(searchQuery)
       {
         searchQuery = searchQuery + ' and ' + searchAutQuery;
          //console.log('in text:'+searchQuery);
       }
       else
       {
         searchQuery = searchAutQuery;
       }
      //console.log(searchQuery);
     }
      if ( this.searchForm.Category != undefined && this.searchForm.Category != '0' )
     {
       let searchCatQuery = 'art."categoryID" = '+ +this.searchForm.Category ;
       if(searchQuery)
       {
         searchQuery = searchQuery + ' and ' + searchCatQuery;
          //console.log('in text:'+searchQuery);
       }
       else
       {
         searchQuery = searchCatQuery;
       }
      //console.log(searchQuery);
     }
     if (this.searchForm.articleContent != undefined)
     {
       let searchTextQuery = '(UPPER(art."articleContent") like UPPER(\'%25'+ this.searchForm.articleContent +'%25\') OR UPPER(art."articleTitle") like UPPER(\'%25'+this.searchForm.articleContent+'%25\') OR UPPER(art."articleTag") like UPPER(\'%25' + this.searchForm.articleContent+'%25\'))' 
       if(searchQuery)
       {
         searchQuery = searchQuery + ' and ' + searchTextQuery;
          //console.log('in text:'+searchQuery);
       }
       else
       {
         searchQuery = searchTextQuery;
       }
      // console.log(searchTextQuery);
     }

     this.articleService.getSearchResults(searchQuery).subscribe((res: Response) => {
        this.searchResults = res;
        if (this.searchResults.entries.entry != undefined) {
          this.searchData = this.searchResults.entries.entry;


          this.showSearchForm = true;
          this.showErrorMessage = false;
          this.hideSearchForm = true;  

          //this.eyeClickedArticle.emit(false);      
          //this.searchForm.Category = null;
        } else {
          this.showSearchForm = false;
          this.showErrorMessage = true;
          this.hideSearchForm = true;
          //this.searchForm.Category = null;
        }
     })
  }

  showArticles() {
    this.searchClicked.emit(true);
    this.hideSearchForm = false;
    this.showErrorMessage = false;
   // this.hideAdvancedSerachForm = false;
    this.hideHomeButton=false;
  }
  getArticleDetail(articleID) {

    this.id = articleID;
    this.articleService.saveInSessionStorage("articleID", this.id);
    this.showViewArticle.emit(true);
    this.hideSearchForm = false;
    //this.router.navigate(['./viewArtcile']);
  }
}
