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

  data: any = '';
  subData: any = '';
  result: any = '';
  article_title: any = '';
  article_desc: any = '';
  article_path: any = '';
  article_content: any = '';
  categoryName: any = '';
  SubCategoryName: any;
  categoryID: any = '';
  user_id: any = +this.articleService.getFromSessionStorage('UserId');
  username: any = this.articleService.getFromSessionStorage('UserName');

  article_tag: any = '';
  articleDetailsData: any = [];
  files: any;
  fileName: any;
  uploadStatus: any;
  fileSuccessMessage: string;
  articleTag1: string = ' ';
  articleTag2: string = ' ';
  articleTag3: string = ' ';
  articleTagResult: string;

  constructor(private articleService: ArticleService, private router: Router) {

  }

  ngOnInit() {
    this.articleService.getParentCategory()
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        console.log('displaying parent category');
        console.log(this.data);
      });

    this.articleService.getSubCategory()
      .subscribe((res: Response) => {
        this.result = res;
        this.subData = this.result.entries.entry;
        console.log('displaying sub category');
        console.log(this.subData);
      });


  }

  insertArticleData() {

    console.log(this.articleTagResult);
    
    this.categoryID = this.data.categoryID;
    let subCategoryId = +this.SubCategoryName;
    let dataObj = {
      '_postinsertarticle': {
        'article_title': this.article_title,
        'article_desc': this.article_desc,
        'article_path': this.fileName,
        'article_content': this.article_content,
        'user_id': this.user_id,
        'categoryid': subCategoryId,
        'article_tag': this.articleTagResult,
        'username': this.username
      }
    };
    this.articleService.insertArticle(dataObj)
      .subscribe((data) => {
        alert("article inserted successfully");
        this.router.navigate(['./home']);
      },
      (err) => {
        console.log('Error occured.');
      }
      );

  }

  public createArticleInputTag(TagName: string) {

    var unit = (<HTMLInputElement>document.getElementById('articleInputTags')).value;

    if (TagName != '')
      unit = TagName;

    var input1 = document.getElementById('inputTag1').innerHTML;
    var input2 = document.getElementById('inputTag2').innerHTML;
    var input3 = document.getElementById('inputTag3').innerHTML;


    if (input1 == '') {
      document.getElementById('inputTag1').innerHTML = unit;
      if (document.getElementById('inputTag1').innerHTML != null) {
        this.articleTag1 = unit;
        this.articleTagResult = this.articleTag1;
      }
    } else {
      if (input2 == '') {
        document.getElementById('inputTag1').innerHTML = unit;
        document.getElementById('inputTag2').innerHTML = input1;
        if (document.getElementById('inputTag1').innerHTML != null) {
          this.articleTag2 = (document.getElementById('inputTag1').innerHTML);
          this.articleTagResult = this.articleTag1 + ' ' + this.articleTag2;
          console.log(this.articleTagResult);
        };
      } else {
        document.getElementById('inputTag1').innerHTML = unit;
        document.getElementById('inputTag2').innerHTML = input1;
        document.getElementById('inputTag3').innerHTML = input2;
        //this.articleTag3= document.getElementById('inputTag3').innerHTML;
        if (document.getElementById('inputTag1').innerHTML != null) {
          this.articleTag3 = (document.getElementById('inputTag1').innerHTML);
          this.articleTagResult = this.articleTag1 + ' ' + this.articleTag2 + ' ' + this.articleTag3;
          console.log(this.articleTagResult);
        };
      }
    }
  }

  uploadFile(event) {
    this.files = event.target.files;
    this.fileName = this.files[0].name;
    console.log(this.fileName);
    this.uploadStatus = this.articleService.uploadFile(this.files[0]);
    if (this.uploadStatus == 'true') {
      this.fileSuccessMessage = 'File uploaded successfully';
    }
    else
      this.fileSuccessMessage = 'Error occured while upload file';
  }

  onbackToHome() {
    this.router.navigate(['./home']);
  }

}








