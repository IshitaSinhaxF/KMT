import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  // name='Angular';
  // value : number; result:number;
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

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
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
  public changeThis() {
    var unit = (<HTMLInputElement>document.getElementById("articleTags")).value;
    document.getElementById('newText').innerHTML = unit;
    console.log("working");

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

}
      //  changeThis8(){
      //   var x = (<HTMLInputElement>document.getElementById("myTagBtn8")).value; 
      //   document.getElementById('newText1').innerHTML = x;
      //   console.log("tag is working");

      //  }
      //  changeThis9(){
      //   var x = (<HTMLInputElement>document.getElementById("myTagBtn9")).value; 
      //   document.getElementById('newText1').innerHTML = x;
      //   console.log("tag is working");

      //  }
      //  changeThis10(){
      //   var x = (<HTMLInputElement>document.getElementById("myTagBtn10")).value; 
      //   document.getElementById('newText1').innerHTML = x;
      //   console.log("tag is working");

      //  }
      //  changeThis11(){
      //   var x = (<HTMLInputElement>document.getElementById("myTagBtn11")).value; 
      //   document.getElementById('newText1').innerHTML = x;
      //   console.log("tag is working");

      //  }






