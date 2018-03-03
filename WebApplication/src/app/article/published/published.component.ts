import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {
  data: any = "";
  result: any;
  articleDetailsData: any = [];
  id : number;

  constructor(private articleService: ArticleService,private router: Router) { }

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
      this.id = articleID;
      this.articleService.saveInSessionStorage("articleID", this.id);
      this.router.navigate(['./viewArtcile']);
  }

}
