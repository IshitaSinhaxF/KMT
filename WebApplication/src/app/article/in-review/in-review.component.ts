import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-review',
  templateUrl: './in-review.component.html',
  styleUrls: ['./in-review.component.css']
})
export class InReviewComponent implements OnInit {

  data: any = '';
  result: any;
  userID: any = this.articleService.getFromSessionStorage('UserId');
  articleDetailsData: any = [];
  id: number;
  roles: any = this.articleService.getFromSessionStorage("Roles");
  //roleId: any = this.roles[0].lkpRoleID;
  roleId: any = "";
  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {
    if (this.roles != "") {
      for (var i = 0; i < this.roles.length; i++) {
        this.roleId = this.roles[i].lkpRoleID;
        console.log('role id: ' + this.roleId);
        if (this.roleId == 1) {
          this.userID = this.articleService.getInReviewArticleService(this.userID, this.roleId)
            .subscribe((res: Response) => {
              this.result = res;
              this.data = this.result.entries.entry;
              console.log(this.data);
            });
        }
      }
    }
  

  }

  getArticleDetail(articleID) {
    this.id = articleID;
    this.articleService.saveInSessionStorage('articleID', this.id);
    this.router.navigate(['./viewArticleInReview']);
  }


}
