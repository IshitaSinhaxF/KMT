import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css']
})
export class PopularTagsComponent implements OnInit {
data: any = "";
results: any = "";
  constructor(private articleService: ArticleService) { }

  ngOnInit() {

      this.articleService.getPopularTags().subscribe((res:Response)=>{
        this.results = res;
        this.data=this.results.entries.entry;
        console.log(this.data);
      })


  }

}
