import { Component } from '@angular/core';
import { Content } from "./helper-files/content-interface";
import {TownService} from "./services/town.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private townService: TownService) {
  }

  title : string = 'Ale_Souchereau_MyFavouriteTowns';
  name : string = 'Alex Souchereau';
  featuredTown : Content = {
    id: 0,
    title: '',
    creator: '',
    imgURL:'',
    description: '',
    type: ''
  }

  ngOnInit() {
    this.townService.getSingleTown(7).subscribe(town => this.featuredTown = town)
  }
/*  processContent (content: Content):void {
    console.log(content.title);
  }*/
}
