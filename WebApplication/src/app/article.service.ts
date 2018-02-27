import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

const headers = new HttpHeaders()
  .set("Content-Type", "application/json")
  .set("Accept","Access-Control-Request-Headers");
  //.append("Content-Type","application/json")
  //.append("","");

@Injectable()
export class ArticleService {

  data:any = "";
 result : any ;


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

  getUserData(){
  return this.result =  this.http.get("http://8.39.51.27:9763/services/KMTool/GetUserDetails",{headers})
  }

  getArticleService(){
    return this.http.get("http://8.39.51.27:9763/services/KMTool/GetArticlesByStatus?statuscondition=1=1AND artSta.\"StateName\" = 'PUBLISHED'")
  }

  getUserDataOnLoad(){
    this.getUserData().subscribe((res: Response) => {
      this.data = res;
      //console.log(this.data.entries.entry[0].userID);
      console.log(this.data);
    });
  }

  getArticleDetailsById(articleId){
    return this.result = this.http.get("http://8.39.51.27:9763/services/KMTool/GetArticleDetailsByID?articleID="+ articleId +""  )
  }
}