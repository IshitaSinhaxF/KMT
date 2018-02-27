import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-draft-article',
  templateUrl: './draft-article.component.html',
  styleUrls: ['./draft-article.component.css']
})
export class DraftArticleComponent implements OnInit {
  data: any = "";
  result: any ;
  userID: any = this.articleService.getFromSessionStorage("UserId"); 
  articleDetailsData: any = [];
  constructor(private articleService : ArticleService) { }
  
  ngOnInit() {
    console.log('User Id from sesssion: '+this.userID);
    this.articleService.getDraftArticleService(this.userID)
    //this.userID = this.articleService.getFromSessionStorage("userID")
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        console.log(this.data)
      })
  }

  getArticleDetail(articleID) {
     
    this.articleService.getArticleDetailsById(articleID).subscribe((res: Response) => {
      this.result = res;
      // console.log(this.result.entries)

      this.articleDetailsData = this.result.entries.entry;
      console.log("article Detail")
      console.log(this.articleDetailsData)
    })

    console.log('Article id: '+articleID);
  }

}
