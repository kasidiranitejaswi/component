import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

 subscribedDemoObesrvable : any;
 id:any;
 doctor:any;
 doctor1:any;

 constructor(
   private route : ActivatedRoute
 ) { }

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
   this.subscribedObservable = this.route.params.subscribe(
    (params) => {
      return this.id= params['id'];
    }
  )
  this.displaydoctorDetails();
  console.log(this.id);
}

displaydoctorDetails(){
  this.doctor.forEach( doctor => {
    if(doctor.id==this.id){
      this.doctor = doctor;
    }
  });
}  


ngOnDestroy(){
  this.subscribedDemoObesrvable.unsubscribe();
}

}