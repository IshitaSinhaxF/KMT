import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import 'rxjs/add/operator/toPromise';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import * as SES from 'aws-sdk/clients/ses';

const bucket = new S3(
  {
    accessKeyId: 'AKIAIG5TP2ZIWEZJG6JQ',
    secretAccessKey: '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',
    region: 'us-west-1'
  }
);

const ses = new SES(
  {
    accessKeyId: 'AKIAI7J3HSGCPNCLZ4GA',
    secretAccessKey: 'ArdYqBdapLlNHjYc4PQ0cjndVudDQGP7iv6rPMi8ucRM',
    region: 'us-west-2'
  }
);


const headers = new HttpHeaders()
  .set('Authorization', 'Bearer 37ff1be9-2d28-3aab-96a6-69ebaa9ce004');

//.set("Content-Type", "application/json");

@Injectable()
export class ArticleService {

  data: any = '';
  result: any;
  Status: any;

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, private http: HttpClient) {
  }

  // saveInSessionStorage('r-'+this.userid,)

  saveInSessionStorage(key, val) {
    // console.log('recieved= key:' + key + ' ; value:' + val);
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
  }

  getFromSessionStorage(key) {
    // console.log('recieved= key:' + key);
    if (this.data != '') {
      this.data[key] = this.storage.get(key);
      // console.log(this.data);
      return this.data[key];
    } else {
      return 'no data';
    }
  }

  removeFromSessionStorage(key) {
    console.log('Removing ' + key + ' from Session');
    this.data[key] = this.storage.remove(key);
  }

  /*GET APIS */

  //User details API
  getUserData() {
    //http://13.57.242.90:8281/KMTool/v1.0.0/
    //prod
    return this.result = this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetUserDetails', {headers});
    //dev
    //return this.result = this.http.get("http://8.39.51.27:8281/KMTool/v1.0.0/GetUserDetails", {headers})
  }

getUsers() {
    //prod
   return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetUsersAndIDs', {headers});
    //dev
   // return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetUsersAndIDs', {headers});
  }


  getAuthorData() {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/SearchAuthor', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/SearchAuthor', {headers});
  }

  // Get Artciles by status API for published articles
  getPublishArticleService() {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'PUBLISHED\'', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'PUBLISHED\'', {headers});
  }

  // Get Artciles by status API for draft articles
  getDraftArticleService(userID) {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'DRAFT\' AND artHis."userID" =' + userID + '', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'DRAFT\' AND artHis."userID" =' + userID + '', {headers});
  }

  // Get Artciles by status API for in-review articles
  getInReviewArticleService(userID, roleId) {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'IN-REVIEW\' AND usrRl."lkpRoleID" =' + roleId + 'AND artHis."userID" =' + userID + '', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'IN-REVIEW\' AND usrRl."lkpRoleID" =' + roleId + 'AND artHis."userID" =' + userID + '', {headers});

  }

  // Get Artciles by status API for pending for  articles
  getPendingArticleService(userID, roleId) {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'IN-REVIEW\' AND artHis."articleApproverID" =' + userID + '', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetArticlesByStatus?statuscondition=1=1AND artSta."StateName" = \'IN-REVIEW\' AND artHis."articleApproverID" =' + userID + '', {headers});
  }

  getUserDataOnLoad() {
    this.getUserData().subscribe((res: Response) => {
      this.data = res;
      //console.log(this.data.entries.entry[0].userID);
      console.log(this.data);
    });
  }

  //get articles by ID api for feed back page
  getArticleDetailsById(articleId) {
    //prod
    return this.result = this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetArticleDetailsByID?articleID=' + articleId + '', {headers});
    //dev
    //return this.result = this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetArticleDetailsByID?articleID=' + articleId + '', {headers});

  }

  //get parent category
  getParentCategory() {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/getParentCategory', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/getParentCategory', {headers});
  }

  //get sub category

  getSubCategory() {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetSubCategories', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetSubCategories', {headers});
  }

  getArticleFeedbacks(articleId) {
    //prod
   return this.result = this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetArticleFeedbacks?articleID=' + articleId + '',{headers});
    //dev
    //return this.result = this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetArticleFeedbacks?articleID=' + articleId + '',{headers});

  }

   getSearchResults(searchQuery) {
     //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/SearchArticles?searchcondition=' + searchQuery, {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/SearchArticles?searchcondition=' + searchQuery, {headers});
  }

  getCategorySearchResults(categoryID) {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) AND art."categoryID" = ' + categoryID, {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) AND art."categoryID" = ' + categoryID, {headers});
  }

  getAuthorSearchResults(author) {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) AND artHis."userID" = ' + author, {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) AND artHis."userID" = ' + author, {headers});
  }

  getCategoryAndAuthorSearchResults(categoryID, userID) {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) AND artHis."userID" = ' + userID + ' AND art."categoryID" = ' + categoryID, {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) AND artHis."userID" = ' + userID + ' AND art."categoryID" = ' + categoryID, {headers});
  }

  getPublishedSearchResults() {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) ', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/SearchArticles?searchcondition=  artHis."ArticleStateID" = ANY(\'{3}\'::int[]) ', {headers});
  }

  getPopularTags() {
    //prod
    return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetPopularTags', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetPopularTags', {headers});
  }

  getSummaryDetails() {
    //prod
   return this.http.get('http://13.57.242.90:8281/KMTool/v1.0.0/GetSummary', {headers});
    //dev
    //return this.http.get('http://8.39.51.27:8281/KMTool/v1.0.0/GetSummary', {headers});
  }

  insertArticle(dataObj) {
    //return this.http.post('http://8.39.51.27:9763/services/KMTool/InsertArticle', dataObj, {headers});
    //prod
    return this.http.post('http://13.57.242.90:8281/KMTool/v1.0.0/InsertArticle', dataObj, {headers});
    //dev
    //return this.http.post('http://8.39.51.27:8281/KMTool/v1.0.0/InsertArticle', dataObj, {headers});

  }

  insertFeedbackPost(articleFeedback, articleId) {
   //return this.http.post('http://8.39.51.27:9763/services/KMTool/InsertArticleFeedback', articleFeedback, {headers});
   //prod
   return this.http.post('http://13.57.242.90:8281/KMTool/v1.0.0/InsertArticleFeedback', articleFeedback, {headers});
   //dev
   //return this.http.post('http://8.39.51.27:8281/KMTool/v1.0.0/InsertArticleFeedback', articleFeedback, {headers});
  }

  updateArticle(article) {
    //return this.http.post('http://8.39.51.27:9763/services/KMTool/UpdateArticle', article, {headers});
    //prod
    return this.http.post('http://13.57.242.90:8281/KMTool/v1.0.0/UpdateArticle', article, {headers});
    //dev
    //return this.http.post('http://8.39.51.27:8281/KMTool/v1.0.0/UpdateArticle', article, {headers});
  }

  updateArticleStatus(articleStatus) {
    console.log(articleStatus);
    //return this.http.post('http://8.39.51.27:9763/services/KMTool/UpdateArticleState', articleStatus);
    //prod
    return this.http.post('http://13.57.242.90:8281/KMTool/v1.0.0/UpdateArticleState', articleStatus,{headers});
    //dev
    //return this.http.post('http://8.39.51.27:8281/KMTool/v1.0.0/UpdateArticleState', articleStatus,{headers});
  }

  updateArticleStatusToPublished(articleStatus) {
    console.log(articleStatus);
    //return this.http.post('http://8.39.51.27:9763/services/KMTool/updateArticlePublishedState', articleStatus);
    //prod
    return this.http.post('http://13.57.242.90:8281/KMTool/v1.0.0/updateArticlePublishedState', articleStatus,{headers});
    //dev
    //return this.http.post('http://8.39.51.27:8281/KMTool/v1.0.0/updateArticlePublishedState', articleStatus,{headers});
  }

  DeleteArticle(articleTobeDeleted)
  {
    console.log(articleTobeDeleted);
    //return this.http.post('http://8.39.51.27:9763/services/KMTool/DeleteArticle', articleTobeDeleted,{headers});
    //prod
    return this.http.post('http://13.57.242.90:8281/KMTool/v1.0.0/DeleteArticle', articleTobeDeleted,{headers});
    //dev 
    //return this.http.post('http://8.39.51.27:8281/KMTool/v1.0.0/DeleteArticle', articleTobeDeleted,{headers});
  }

  uploadFile(file) {
    const params = {
      Bucket: 'kmtweb',
      Key: file.name,
      Body: file,
      ACL: 'public-read'
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      } else {
        console.log('Successfully uploaded file.', data);
        return true;
      }
    });
  }

  sendEmail(subject, body) {
    const data = {'subject': subject, 'body': body};
    this.http.post(`https://w2ix5v3x1b.execute-api.us-west-2.amazonaws.com/dev/sendemail`, data, {headers})
      .subscribe(
        res => {
          console.log('Successfully sent');
        },
        err => {
          console.log('Error sending email', err);
        }
      );
  }
}
