import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  public doctor : any;
  public subscribedObservable : any;

  constructor() { }

  ngOnInit() {
    this.doctor = [{
      id : 1,
      name : "Dr.Shashikanth",
      specialist : 'Cardiologist'
   },
   {
    id:2,
    name : "Dr.Rajinikanth",
    specialist : 'Endocrynologist'
  },
  {
    id:3,
    name: "Dr.Sandeep Reddy",
    specialist: 'Gynacologist'
  }
]

  this.demo();
  }


  demo(){
   this.subscribedObservable = Observable.interval(1000)
      .subscribe(
        () => { console.log(new Date()) } 
     )
  }

  ngOnDestroy(){
    this.subscribedObservable.unsubscribe();
  }

}

