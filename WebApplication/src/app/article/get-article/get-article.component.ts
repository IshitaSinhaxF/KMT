import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-article',
  templateUrl: './get-article.component.html',
  styleUrls: ['./get-article.component.css']
})
export class GetArticleComponent implements OnInit {
  data: any = "";
  result: any;
  articleDetailsData: any = [];
  StateName: any;
  // published : any = 'PUBLISHED';
  constructor(private articleService: ArticleService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.articleService.getPublishArticleService()
    //   .subscribe((res: Response) => {
    //     this.result = res;
    //     this.data = this.result.entries.entry;
    //     console.log(this.data)
    //   })
  }

  onFeedback() {

    console.log("feedback popup");
  }

  getArticleDetail(articleID) {
    // this. onEyeOpenClick() // this is the best approach and it will become easy to navigate to diff page instead of changing the function
    //or directly call the below navigate function instead of creating a new function 
   // this.router.navigate(['./viewArtcile']);

    //service goess 
     
    this.articleService.getArticleDetailsById(articleID).subscribe((res: Response) => {
      this.result = res;
      console.log(this.result.entries)

      this.articleDetailsData = this.result.entries.entry;
      console.log("article Detail")
      console.log(this.articleDetailsData)
    })

    console.log('Article id: '+articleID);
  }
  onEyeOpenClick() {

    this.router.navigate(['./viewArtcile']);

  }

  onClick(){
    console.log("On click ")
  }
}
