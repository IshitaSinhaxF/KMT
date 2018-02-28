import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  // name='Angular';
  // value : number; result:number;

  constructor() {
   
   }

  ngOnInit() {
  }
  public changeThis(){
    var unit = (<HTMLInputElement>document.getElementById("articleTags")).value; 
    document.getElementById('newText').innerHTML = unit;
    //document.body.appendChild(unit);
   //document.documentElement.firstChild.appendChild(newText);
    //document.body.appendChild();
     
    console.log("working");
       }
      //  export class AppComponent 
      //  { 
      // name = 'Angular'; 
      // value : number;value1 : number;result:number;
      //  constructor(value : number,value1 : number,result:number)
      //  {
     
      //  
      //  }}



}





