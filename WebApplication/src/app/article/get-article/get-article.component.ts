import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../article.service';

//import {Popup} from 'ng2-opd-popup';
const headers = new HttpHeaders()
  .set("Content-Type", "application/json");

@Component({
  selector: 'app-get-article',
  templateUrl: './get-article.component.html',
  styleUrls: ['./get-article.component.css']
})
export class GetArticleComponent implements OnInit {
  data: any = "";
  result: any;
  articleDetailsData: any = [];
  // StateName : any;
  // published : any = 'PUBLISHED';
  constructor(private articleService: ArticleService, private http: HttpClient) { }
  //private popup:Popup

  ngOnInit() {
    this.articleService.getArticleService()
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        console.log(this.data)
      })
  }
 
  onFeedback() {

    console.log("feedback popup");
  }

  getArticleDetail(articleID) {
     
    //service goess 
    this.articleService.getArticleDetailsById(articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsData = this.result.entries.entry;
      console.log("article Detail")

      console.log(this.articleDetailsData)
    })

    console.log(articleID);
  }

}
