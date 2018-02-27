import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {
  data: any = "";
  result: any;
  articleDetailsData: any = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getPublishArticleService()
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        console.log("displaying published articles")
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
