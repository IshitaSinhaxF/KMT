import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../article.service';
//import {Popup} from 'ng2-opd-popup';
import {Router} from '@angular/router';

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
  constructor(private articleService: ArticleService, private http: HttpClient,private router:Router) { }
  //private popup:Popup

  ngOnInit() {
    this.articleService.getArticleService()
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        console.log(this.data)
      })
  }
 
  // onFeedback() {

  //   this.popup1.options = {
  //     header: "Feedback",
  //     color: "#5cb85c", // red, blue.... 
  //     widthProsentage: 100, // The with of the popou measured by browser width 
  //     animationDuration: 1, // in seconds, 0 = no animation 
  //     showButtons: false, // You can hide this in case you want to use custom buttons 
  //     //cancleBtnContent: "Cancel", // the text on your cancel button 
  //     cancleBtnContent: "Cancel", // the text on your cancel button 
  //     cancleBtnClass: "btn btn-default1",
  //     confirmBtnContent: "Submit",
  //     confirmBtnClass: "btn btn-default",
      
  //     };
  
  //   this.popup1.show(this.popup1.options);
  //   console.log("feedback popup");

    
  // }

  getArticleDetail(articleID) {

    //this.onFeedback();
    console.log("calling feedback");
    //service goess 
    this.articleService.getArticleDetailsById(articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsData = this.result.entries.entry;
      console.log("article Detail")

      console.log(this.articleDetailsData)
    })

    console.log(articleID);
  }
  onCancelRequest(){
    this.router.navigate(['./home']);
  }
  createNewArticle() {
    this.router.navigate(['./createArticle']);
    };
}