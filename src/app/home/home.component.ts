import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public continue  : any = "";

  ngOnInit() {
    this.continue = "Hello";
  }

  showContent(){
    this.continue = !this.continue;
  }

}
