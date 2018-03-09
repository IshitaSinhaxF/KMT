import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  data: any = "";
  results: any = "";
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getSummaryDetails().subscribe((res: Response) => {
      this.results = res;
      this.data = this.results.entries.entry[0];
    })
  }

}
