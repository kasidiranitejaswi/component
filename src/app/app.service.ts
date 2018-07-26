import { Injectable } from "@angular/core";

import { environment } from '../environments/environment';
import { HttpClient } from "@angular/common/http";



@Injectable()

export class LoginService{
    constructor( private http : HttpClient
    ){ }
   
    public serverUrl = environment.serverUrl;

    login(user){
        console.log(user);
        return this.http.post("http://localhost:3500/v1/user/login",user);
    }

    getData(userId){
        let headers = new Headers();
        headers.append('token',localStorage.getItem('token'));
        console.log(headers);
        console.log("In service",userId);
        return this.http.post("http://localhost:3500/v1/user/getlog",{headers : headers},userId);
    }

    getstatus(){
        return this.http.get("http://localhost:3500/v1/user/getstatus");
    }
}