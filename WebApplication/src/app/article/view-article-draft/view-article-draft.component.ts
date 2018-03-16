import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-article-draft',
  templateUrl: './view-article-draft.component.html',
  styleUrls: ['./view-article-draft.component.css']
})
export class ViewArticleDraftComponent implements OnInit {
@Output() backToHome = new EventEmitter
  articleID: any = this.articleService.getFromSessionStorage("articleID");
  userID: number = +this.articleService.getFromSessionStorage("UserId");
  userName: string = this.articleService.getFromSessionStorage("UserName");
  result: any;
  articleDetailsinDraftData: any;
  subCatData: any;
  categoryID: number;
  files: any;
  fileName: any;
  artFileParam:any;
  uploadStatus: any;
  fileSuccessMessage: string;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsinDraftData = this.result.entries.entry[0];
      //console.log(this.articleDetailsinDraftData);
    })

    this.articleService.getSubCategory()
      .subscribe((res: Response) => {
        this.result = res;
        this.subCatData = this.result.entries.entry;
        //console.log('displaying sub category');
        //console.log(this.subCatData);
      });

  }
  onbackToHome() {
    this.router.navigate(['./home']);
  }
  SubmitForApproval() {
    let data =
      {
        "_postupdatearticlestate":
        {
          "article_id": +this.articleID,
          "user_id": +this.userID,
          "article_state": 'IN-REVIEW',
          "username": this.userName
        }
      }
    //console.log(data);

    this.articleService.updateArticleStatus(data)
      .subscribe((res) => {
        //console.log(res);
        alert("article submited for review");
        this.backToHome.emit(false);
        this.articleService.sendEmail('Knowledge Article submitted for review', 'Dear user, The Knowedge article has been submitted for review. You can view the submitted article under In-Reveiw.');
      },
      (err) => {
        alert(err);
      }
      );
  }

  SaveArticleChanges() {

    this.categoryID = this.articleDetailsinDraftData.categoryID;
    if(this.articleDetailsinDraftData.articlePath == undefined)
    {
      if(this.fileName != undefined)
      this.artFileParam = this.fileName
      else 
      this.artFileParam = null
    }
    else
    {
      this.artFileParam = this.articleDetailsinDraftData.articlePath
    }



    let modifiedArticle = {
      '_postupdatearticle': {
        'article_id': +this.articleDetailsinDraftData.articleID,
        'article_title': this.articleDetailsinDraftData.articleTitle,
        'article_desc': this.articleDetailsinDraftData.articleDesc,
        //'article_path': this.articleDetailsinDraftData.articlePath,
         'article_path': this.artFileParam,
        'article_content': this.articleDetailsinDraftData.articleContent,
        'user_id': +this.userID,
        'categoryid': +this.categoryID,
        'article_tag': this.articleDetailsinDraftData.articleTag,
        'username': this.userName
      }
    };

    this.articleService.updateArticle(modifiedArticle)
      .subscribe((res) => {
        alert("article updated successfully");
        this.backToHome.emit(false);
      },
      (err) => {
        alert(err);
      }
      );      
  }

    uploadFile(event) {
    this.files = event.target.files;
    this.fileName = this.files[0].name;
    //console.log(this.fileName);
    this.uploadStatus = this.articleService.uploadFile(this.files[0]);
    if (this.uploadStatus == 'true') {
      this.fileSuccessMessage = 'File uploaded successfully';
    }
    else
      this.fileSuccessMessage = 'Error occured while upload file';
  }

}

