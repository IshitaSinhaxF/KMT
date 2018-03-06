import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-for-approval',
  templateUrl: './pending-for-approval.component.html',
  styleUrls: ['./pending-for-approval.component.css']
})
export class PendingForApprovalComponent implements OnInit {

  data: any = '';
  result: any;
  userID: any = this.articleService.getFromSessionStorage('UserId');
  articleDetailsData: any = [];
  id: number;
  roles: any = this.articleService.getFromSessionStorage("Roles");
  roleId: any = "";
  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {
    if (this.roles != "") {
      for (var i = 0; i < this.roles.length; i++) {
        this.roleId = this.roles[i].lkpRoleID;
        console.log('role id: ' + this.roleId);
        if (this.roleId == 2) {
          this.userID = this.articleService.getPendingArticleService(this.userID, this.roleId)
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
