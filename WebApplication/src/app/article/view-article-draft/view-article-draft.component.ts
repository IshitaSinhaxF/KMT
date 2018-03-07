import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-article-draft',
  templateUrl: './view-article-draft.component.html',
  styleUrls: ['./view-article-draft.component.css']
})
export class ViewArticleDraftComponent implements OnInit {

  articleID: any = this.articleService.getFromSessionStorage("articleID");
  userID: number = +this.articleService.getFromSessionStorage("UserId");
  userName: string = this.articleService.getFromSessionStorage("UserName");
  result: any;
  articleDetailsinDraftData: any;
  subCatData: any;

  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit() {
    this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsinDraftData = this.result.entries.entry[0];
      console.log(this.articleDetailsinDraftData);
    })

       this.articleService.getSubCategory()
      .subscribe((res: Response) => {
        this.result = res;
        this.subCatData = this.result.entries.entry;
        console.log('displaying sub category');
        console.log(this.subCatData);
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
      console.log(data);

      this.articleService.updateArticleStatus(data)
       .subscribe((res) => {
         console.log(res);
        alert("article submited for review");
        this.router.navigate(['./home']);
      },
      (err) => {        
        alert(err);
      }
      );
   }

  saveChanges() { }
}
