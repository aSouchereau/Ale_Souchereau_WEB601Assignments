import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Content} from "../helper-files/content-interface";
import {TOWNS} from "../helper-files/contentDB";

@Injectable({
  providedIn: 'root'
})
export class TownService {

  constructor() { }

  getTowns(): Observable<Content[]> {
    return of(TOWNS);
  }
}
