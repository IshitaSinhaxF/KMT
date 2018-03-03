import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import 'rxjs/add/operator/toPromise';


const headers = new HttpHeaders()
  .set("Content-Type", "application/json");
  //.append("Content-Type","application/json")
  //.append("","");

@Injectable()
export class ArticleService {

  data:any = "";
  result : any ;
  insertStatus : string;
  

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, private http:HttpClient) {

  }
 // saveInSessionStorage('r-'+this.userid,)

  saveInSessionStorage(key, val) {
    console.log('recieved= key:' + key + ' ; value:' + val);
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
  }

  getFromSessionStorage(key) {
    console.log('recieved= key:' + key);
    this.data[key] = this.storage.get(key);
    console.log(this.data);
    return this.data[key];
  }

  removeFromSessionStorage(key){
    console.log('user details removed from session: '+ key);
    this.data[key]=this.storage.remove(key);
  }
//User details API
  getUserData(){
  return this.result =  this.http.get("http://8.39.51.27:9763/services/KMTool/GetUserDetails",{headers})
  }
// Get Artciles by status API for published articles
  getPublishArticleService(){
    return this.http.get("http://8.39.51.27:9763/services/KMTool/GetArticlesByStatus?statuscondition=1=1AND artSta.\"StateName\" = 'PUBLISHED'")
  }
// Get Artciles by status API for draft articles
  getDraftArticleService(userID){
    return this.http.get("http://8.39.51.27:9763/services/KMTool/GetArticlesByStatus?statuscondition=1=1AND artSta.\"StateName\" = 'DRAFT' AND artHis.\"userID\" ="+ userID +"")
  }
// Get Artciles by status API for in-review articles
  getInReviewArticleService(userID){
    return this.http.get("http://8.39.51.27:9763/services/KMTool/GetArticlesByStatus?statuscondition=1=1AND artSta.\"StateName\" = 'IN-REVIEW' AND artHis.\"userID\" ="+ userID +"")
  }

  getUserDataOnLoad(){
    this.getUserData().subscribe((res: Response) => {
      this.data = res;
      //console.log(this.data.entries.entry[0].userID);
      console.log(this.data);
    });
  }
//get articles by ID api for feed back page
  getArticleDetailsById(articleId){
    return this.result = this.http.get("http://8.39.51.27:9763/services/KMTool/GetArticleDetailsByID?articleID="+ articleId +""  )
  }

  getArticleFeedbacks(articleId){
    return this.result = this.http.get("http://8.39.51.27:9763/services/KMTool/GetArticleFeedbacks?articleID="+ articleId +""  )
  }

  insertFeedbackPost(articleFeedback):string {
     // this.insertStatus = 'Success'; 
      const req = this.http.post('http://8.39.51.27:9763/services/KMTool/InsertArticleFeedback', articleFeedback,{headers})
      .subscribe(
        (res:Response) => {
          //console.log('entered the loop');
          console.log(res);
          this.insertStatus = 'succeed';

               
        },
        err => {
          this.insertStatus = 'failed';
        }
      );
      return this.insertStatus;
      //console.log(req)
     
  }

  // insertFeedbackPost(articleFeedback) {
      
  //     const req = this.http.post('http://8.39.51.27:9763/services/KMTool/InsertArticleFeedback', articleFeedback,{headers})
  //     .toPromise(
  //       ).then() ;
  //     return this.result;
  //     //console.log(req)
     
  // }


  


}
