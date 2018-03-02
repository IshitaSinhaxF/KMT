import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
 

  constructor() {
   
   }

  ngOnInit() {
  }
  public changeThis(TagName: string){
    
    var unit = (<HTMLInputElement>document.getElementById("articleTags")).value; 
    
    if(TagName != "")
    unit = TagName;
    
    var oldtext1 = document.getElementById('newText1').innerHTML;
    var oldtext2 = document.getElementById('newText2').innerHTML;
    var oldtext3 = document.getElementById('newText3').innerHTML;

    if(oldtext1 == "")
    {document.getElementById('newText1').innerHTML = unit;}
     else
     {
       if(oldtext2 == "")
       {document.getElementById('newText1').innerHTML = unit;
         document.getElementById('newText2').innerHTML = oldtext1;
        }
        else
        {document.getElementById('newText1').innerHTML = unit;
        document.getElementById('newText2').innerHTML = oldtext1;
        document.getElementById('newText3').innerHTML = oldtext2;
        }
      }
      console.log("working");
     
       }

       public changeThis2(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn2")).value; 
        document.getElementById('newText1').innerHTML = x;
        // if(TagName1 != "")
        // x = TagName1;
        // var oldtext1 = document.getElementById('newText1').innerHTML;
        // var oldtext2 = document.getElementById('newText2').innerHTML;
        // var oldtext3 = document.getElementById('newText3').innerHTML;
        // if(oldtext1 == "")
        
        // {
        //   document.getElementById('newText1').innerHTML = x;
        // }
        //  else
        //  {
        //    if(oldtext2 == "")
        //    {document.getElementById('newText1').innerHTML = x;
        //      document.getElementById('newText2').innerHTML = oldtext1;
        //     }
        //     else
        //     {document.getElementById('newText1').innerHTML = x;
        //     document.getElementById('newText2').innerHTML = oldtext1;
        //     document.getElementById('newText3').innerHTML = oldtext2;
        //     }
        //   }
        }
       changeThis3(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn3")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis4(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn4")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis5(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn5")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis6(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn6")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis7(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn7")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis8(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn8")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis9(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn9")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis10(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn10")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
       changeThis11(){
        var x = (<HTMLInputElement>document.getElementById("myTagBtn11")).value; 
        document.getElementById('newText1').innerHTML = x;
        console.log("tag is working");

       }
}





