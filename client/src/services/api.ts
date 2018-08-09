import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../environments/environment';
import igdb from 'igdb-api-node';
import { map } from "rxjs/operators";

interface GameObject {


}

@Injectable()
export class GameService {

   

    BASE_URL: string = environment.BASEURL;
    constructor(private http: Http) {

    }



    isPs4() {
        return this.http.get(`${this.BASE_URL}/game/ps4`).pipe(map((arr1) => {
            return arr1.json();
        }))


    }

    isXbox() {
        return this.http.get(`${this.BASE_URL}/game/xbox`).pipe(map((arr2) => {
            return arr2.json();
        }))

    }

    isNintento() {
        return this.http.get(`${this.BASE_URL}/game/switch`).pipe(map((arr3) => {
            return arr3.json();
        }))

    }

    isSteam() {
        return this.http.get(`${this.BASE_URL}/game/steam`).pipe(map((arr4) => {
            return arr4.json();
        }))

    }

}