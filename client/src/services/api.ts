import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../environments/environment';
import igdb from 'igdb-api-node';
import { map } from "rxjs/operators";

interface GameObject {


}

@Injectable()
export class GameService {

  API_URL: string = "https://api-2445582011268.apicast.io/platforms/48"; // PS4
  API_URL2: string = "https://api-2445582011268.apicast.io/platforms/49"; //XBOX ONE
  API_URL3: string = "https://api-2445582011268.apicast.io/platforms/130"; //Nintendo Switch
  API_URL4: string = "https://api-2445582011268.apicast.io/platforms/92"; //Steam

  BASE_URL:string = environment.BASEURL;
  constructor(private http: Http) {

  }



  isPs4() {
    return this.http.get(`${this.BASE_URL}/game`).pipe(map((res) => { 
        console.log(res);
     return res.json(); 
    }))


  }
  
     isXbox(){
        return this.http.get(`${this.BASE_URL}/game`).pipe(map((res) => { 
            return res.json(); 
           }))
      
     }
  
     isNintento(){
        return this.http.get(`${this.BASE_URL}/game`).pipe(map((res) => { 
            return res.json(); 
           }))
  
     }
  
     isSteam(){
        return this.http.get(`${this.BASE_URL}/game`).pipe(map((res) => { 
            return res.json(); 
           }))   
  
     }  

}