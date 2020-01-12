import { Injectable } from '@angular/core';
import { Menu } from './models/menu.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'user-key': 'ff053aed84b58b5254a8bdf63b888b79'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = "https://developers.zomato.com/api/v2.1/categories";


  breakfast: Menu[] =[
    new Menu('IBIRAHA', 200),
    new Menu('IRINDAZI', 100),
    new Menu('IBISHITANI', 400),
    new Menu('BANJIYA', 50),
    new Menu('SAMBUSA', 200),
    new Menu('ROLEX', 300)
  ]
  lunch: Menu[] = [
    new Menu('IMVANGE', 1000),
    new Menu('CAPATI N\'IBISHYIMBO', 500),
    new Menu('UMUCERI N\'ISOSI', 1500),
    new Menu('INYAMA', 800),
  ]

  constructor(private httpClient: HttpClient){}

  getBreak(){
    return this.breakfast.slice();
  }
  getLunch(){
    return this.lunch.slice();
  }

  getRestaurant(){
    return this.httpClient.get(this.url, httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
