import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

const headers = new HttpHeaders()
  .set("Content-Type", "application/json");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private articleService: ArticleService, private http: HttpClient) {
  }

  // userName = '';
  value: any = [
    { roleName: "" },
    { pwd: "" }
  ];

  data: any = "";
  result: any;
  rolesData: any = [];
  rolesArray: any = [];
  roleName: any = "";
  roles: any = [{
    "lkpRoleID": this.data.lkpRoleID,
    "roleName": this.data.roleName
  }];
  userFirstName: any = "";


  onLoginClick() {
    this.router.navigate(['./home']);
    var userDetails = this.data.filter(el => {
      if (el.userFirstName
        == this.userFirstName)
        return true;


    });

    //this.articleService.saveInSessionStorage("RoleID", this.roleName);
    if(this.userFirstName == "Mahaboob"){
      this.articleService.saveInSessionStorage("RoleID", userDetails[0].lkpRoleID);
      this.articleService.saveInSessionStorage("RoleID", userDetails[1].lkpRoleID);
    }else{
      this.articleService.saveInSessionStorage("RoleID", userDetails[0].lkpRoleID);
    }
    
    this.articleService.saveInSessionStorage("UserId", userDetails[0].userID);
    this.articleService.saveInSessionStorage("UserName", userDetails[0].userFirstName + ' '+ userDetails[0].userLastName);
   
    //this.articleService.saveInSessionStorage(this.roles.lkpRoleID, this.roles.roleName);
    //console.log("data: " + this.articleService.data.toString())
    console.log( userDetails)
   // console.log("data: " + this.data)
  }
  ngOnInit() {
    this.articleService.getUserData().subscribe((res: Response) => {
      this.result = res;
      this.data = this.result.entries.entry;


      this.rolesArray = this.data.filter(el => {
        if (this.rolesData.indexOf(el.lkpRoleID
        ) === -1) {

          this.rolesData.push(el.lkpRoleID
          );
          return true;
        } else {

          return false;
        }
      });


      console.log(this.data)
      console.log(this.rolesArray)
    });
  }

}
