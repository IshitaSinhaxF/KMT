import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
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
  @Output() eyeClickedArticle = new EventEmitter();
  @Output() eyeClickedReviewArticle = new EventEmitter();
  @Output() eyeClickedDraftArticle = new EventEmitter(); 
  @Output() eyeClickedPendingArticle = new EventEmitter(); 
  
  data: any = "";
  result: any;
  publishedData: any = "";
  publishedResult: any = "";
  pendingData: any = "";
  pendingResult: any;
  draftData: any = "";
  draftResult: any = "";
  inReviewData: any = "";
  inReviewResult: any = "";
  articleDetailsData: any = [];
  setDiv: any;
  id: any;
  userID: any = this.articleService.getFromSessionStorage('UserId');
  inReviewUserId: any = this.articleService.getFromSessionStorage('UserId');
  roles: any = this.articleService.getFromSessionStorage("Roles");
  roleId: any = "";
  dataLength: any = "";
  publishedDataLength: any = "";
  pendingDataLength: any = "";
  draftDataLength: any = "";
  inReviewDataLength: any = "";

  constructor(private articleService: ArticleService, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.articleService.getPublishArticleService()
      .subscribe((res: Response) => {
        this.publishedResult = res;
        this.publishedData = this.publishedResult.entries.entry;
        this.setDiv = 'Published';
        this.id = 1;
         console.log(this.publishedData);
        this.publishedDataLength = this.publishedData.length;
      })


    this.articleService.getDraftArticleService(this.userID)
      .subscribe((res: Response) => {
        this.draftResult = res;
        this.draftData = this.draftResult.entries.entry;
        // console.log(this.data);
        this.draftDataLength = this.draftData.length;
        // console.log('length: ' + this.draftDataLength)
      })


    if (this.roles != "") {
      for (var i = 0; i < this.roles.length; i++) {
        this.roleId = this.roles[i].lkpRoleID;
        // console.log('role id: ' + this.roleId);
        if (this.roleId == 2) {
          this.userID = this.articleService.getPendingArticleService(this.userID, this.roleId)
            .subscribe((res: Response) => {
              this.pendingResult = res;
              this.pendingData = this.pendingResult.entries.entry;
              this.pendingDataLength = this.pendingData.length
            });
        } else if (this.roleId == 1) {
          this.inReviewUserId = this.articleService.getInReviewArticleService(this.inReviewUserId, this.roleId)
            .subscribe((res: Response) => {
              this.inReviewResult = res;
              this.inReviewData = this.inReviewResult.entries.entry;
              this.inReviewDataLength = this.inReviewData.length
            });
        }
      }
    }


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
  showFeedback(event){
    this.eyeClickedArticle.emit(false);
    
  }

  showInReviewFeedback(event){
    this.eyeClickedReviewArticle.emit(false)
  }

  showDraftFeedback(){
    this.eyeClickedDraftArticle.emit(false);
  }
  
  showPendingFeedback(){
    this.eyeClickedPendingArticle.emit(false);
  }
}
