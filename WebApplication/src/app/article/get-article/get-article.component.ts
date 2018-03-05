import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-article',
  templateUrl: './get-article.component.html',
  styleUrls: ['./get-article.component.css']
})
export class GetArticleComponent implements OnInit {
  data: any = "";
  result: any;
  articleDetailsData: any = [];
  setDiv: any;
  id: any;
  roles: any = this.articleService.getFromSessionStorage("Roles");
  roleId: any = "";
  constructor(private articleService: ArticleService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (this.roles != "") {
      for (var i = 0; i < this.roles.length; i++) {
        this.roleId = this.roles[i].lkpRoleID;
        console.log('role id: ' + this.roleId);
      }
    }

    this.articleService.getPublishArticleService()
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        this.setDiv = 'Published';
        this.id = 1;
        console.log(this.data)
      })
  }

  displayPublishedDiv() {
    console.log('published')
    this.setDiv = 'Published';
  }
  displayPendingApprovDiv() {
    console.log('pending')
    this.setDiv = 'PendingApproval';
  }
  displayDraftDiv() {
    this.setDiv = 'Draft';
  }

  displayInReview() {
    console.log('In review')
    this.setDiv = 'InReview';
  }
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

  addClass(id: any) {
    this.id = id;
  }

  onCancelRequest() {
    this.router.navigate(['./home']);
  }
  createNewArticle() {
    this.router.navigate(['./createArticle']);
  };

}