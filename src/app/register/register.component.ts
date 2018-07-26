import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppServices } from '../app.service';
//import { LoginService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   public firstname : any;
   public lastname : any;
   public age : any;
   public gender : any;
   public email : any;
   public password : any;
   public number1 : any;
   public number2 : any;
   

   public user : any;
   public userDetails : any;
    

   data = {
     designation: '',
     description: '',
   }
   public showform: boolean = true;
   public myarr = [];

   constructor(
     private appService : AppServices,
     private router : Router
   ) { }

  ngOnInit() {
  }

   save() {
     this.myarr.push(this.data.designation)
     this.myarr.push(this.data.description)
     this.data.designation='';
     this.data.description='';
   }

   register(){
     if(!this.firstname){
      alert("please enter firstname");
     }else if(!this.lastname){
       alert("please enter lastname");
     }else if(!this.age){
      alert("please enter age");
     }else if(!this.gender){
      alert("please enter gender");
     }else if(!this.email){
      alert("please enter email");
     }else if(!this.password){
      alert("please enter password");
     }else if(!this.number1){
      alert("please enter number");
     }else if(!this.number2){
     alert("please enter number2");
   }else{
     this.user = {
       firstname : this.firstname,
       lastname : this.lastname,
       age : this.age,
       gender : this.gender,
       email : this.email,
       password : this.password,
       number1 : this.number1,
       number2 : this.number2

     };

     this.appService.register(this.user)
        .subscribe(
          (response) =>{
            this.userDetails = response;
            console.log( this.userDetails)
            if(this.userDetails.status){
              this.router.navigate(['/login'])
            }else{
              alert(this.userDetails.message);
            }
          }
        )
   }

}
}