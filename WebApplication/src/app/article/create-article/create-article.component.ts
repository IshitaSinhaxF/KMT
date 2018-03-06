import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  
  userName :any = "";
  roles: any = [];
  data: any = "";
  subData: any = "";
  result: any = "";
  article_title: any = "";
  article_desc: any = "";
  article_path: any = "";
  article_content: any = "";
  categoryName: any = "";
  SubCategoryName: any;
  categoryID: any = "";
  user_id: any = +this.articleService.getFromSessionStorage("UserId");
  username: any = this.articleService.getFromSessionStorage("UserName");;
  article_tag: any = "";
  articleDetailsData: any = [];

  constructor(private articleService: ArticleService, private router: Router) {

  }

  ngOnInit() {

    if(this.articleService == null){
      console.log("Login to append user name")
     }else{
      this.userName = this.articleService.getFromSessionStorage("UserName"); 
      this.roles = this.articleService.getFromSessionStorage("Roles"); 
      console.log("roles:");
      console.log(this.roles);
     }

       this.articleService.getParentCategory()
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        console.log("displaying parent category");
        console.log(this.data);
      })

      this.articleService.getSubCategory()
      .subscribe((res: Response) => {
        this.result = res;
        this.subData = this.result.entries.entry;
        console.log("displaying sub category")
        console.log(this.subData)
      })

      

      
  }
  insertArticleData() {
    console.log(this.article_title)
    this.categoryID = this.data.categoryID
    // console.log(this.categoryID)
    console.log(this.SubCategoryName)
    // console.log(this.dataObj)
    let subCategoryId = + this.SubCategoryName
    let dataObj = {
      "_postinsertarticle": {
        "article_title": this.article_title,
        "article_desc": this.article_desc,
        "article_path": "test path",
        "article_content": this.article_content,
        "user_id": this.user_id,
        "categoryid": subCategoryId,
        "article_tag": "test tag",
        "username": this.username
      }
    }
    this.articleService.insertArticle(dataObj)
      .subscribe((data) => {
        console.log(data)
      },
        (err) => {
          console.log("Error occured.")
        }
      )
  }

  public createArticleInputTag(TagName: string){
    
    var unit = (<HTMLInputElement>document.getElementById("articleInputTags")).value; 
    
    if(TagName != "")
    unit = TagName;
    var input1 = document.getElementById('inputTag1').innerHTML;
    var input2 = document.getElementById('inputTag2').innerHTML;
    var input3 = document.getElementById('inputTag3').innerHTML;

    if(input1 == "")
    {document.getElementById('inputTag1').innerHTML = unit;}
     else
     {
       if(input2 == "")
       {document.getElementById('inputTag1').innerHTML = unit;
         document.getElementById('inputTag2').innerHTML = input1;
        }
        else
        {document.getElementById('inputTag1').innerHTML = unit;
        document.getElementById('inputTag2').innerHTML = input1;
        document.getElementById('inputTag3').innerHTML = input2;
        }
      }
      console.log("working");
     
       }

       onbackToHome() {
        this.router.navigate(['./home']);

      }
    }









     