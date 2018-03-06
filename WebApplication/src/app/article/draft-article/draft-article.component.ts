import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-draft-article',
  templateUrl: './draft-article.component.html',
  styleUrls: ['./draft-article.component.css']
})
export class DraftArticleComponent implements OnInit {
  @Input() draftArticleData:any;
  data: any = "";
  result: any ;
  articleDetailsData: any = [];
  
  constructor(private articleService : ArticleService) { }
  
  ngOnInit() {
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
