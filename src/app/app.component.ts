import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : any = "";
  ngOnInit(){
    this.isApplicable = false;
    this.isAccessable();
    this.title = "learning";
  }
 
  public isApplicable : Boolean;

  isAccessable(){
    console.log("Hello", this.isApplicable);
  }
}
