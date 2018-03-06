import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

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
  setDiv:any;
  id:any;

  value: any = [
    { roleName: "" },
    { pwd: "" }
  ];

 
  rolesData: any = [];
  rolesArray: any = [];
  roleName: any = "";
  roles: any = [{
    "lkpRoleID": this.data.lkpRoleID,
    "roleName": this.data.roleName
  }];
  userFirstName: any = "";
  roleData : any = [];

  constructor(private articleService: ArticleService, private http: HttpClient,private router:Router) { }

  ngOnInit() {


    this.articleService.getUserData().subscribe((res: Response) => {
      this.result = res;
      this.data = this.result.entries.entry;


      this.rolesArray = this.data.filter(el => {
        if (this.rolesData.indexOf(el.lkpRoleID
        ) === -1) {

          this.rolesData.push(el.lkpRoleID
          );
          return true;
        } else {

          return false;
        }
      });
    });
    this.articleService.getPublishArticleService()
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        this.setDiv = 'Published';
        this.id = 1;
        console.log(this.data)
      })
  }
 
displayPublishedDiv()
{ 
  console.log('published')
  this.setDiv = 'Published';
}
displayPendingApprovDiv()
{
  console.log('pending')
this.setDiv = 'PendingApproval';
}
displayDraftDiv()
{
this.setDiv = 'Draft';
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

  onCancelRequest(){
    this.router.navigate(['./home']);
  }
  createNewArticle() {
    this.router.navigate(['./createArticle']);

    var userDetails = this.data.filter(el => {
      if (el.userFirstName
        == this.userFirstName){
          this.roleData.push(el.lkpRoleID)
        return true;
      }
    });
  
    this.articleService.saveInSessionStorage("Roles", userDetails);
    this.articleService.saveInSessionStorage("UserId", userDetails[0].userID);
    this.articleService.saveInSessionStorage("UserName", userDetails[0].userFirstName + ' '+ userDetails[0].userLastName);
}
}