import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Content} from "../helper-files/content-interface";
import {TOWNS} from "../helper-files/contentDB";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class TownService {

  constructor(private messageService: MessageService) { }

  getTowns(): Observable<Content[]> {
    this.messageService.add('Content Array Loaded...');
    return of(TOWNS);
  }

  getSingleTown(id:number): Observable<Content> {
    this.messageService.add(`Content item at index: ${id} loaded...`)
    return of(TOWNS[id]);
  }
}
