import { Component } from '@angular/core';
import { Content } from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'Ale_Souchereau_MyFavouriteTowns';
  name : string = 'Alex Souchereau';
  contentItem : Content = {
    id: 1024,
    title: 'Title of the Content',
    creator: 'Alex Souchereau',
    imgURL:'https://angular.io/assets/images/logos/angular/angular.png',
    description: 'This is the body of the content',
    type: 'news'
  }
/*  processContent (content: Content):void {
    console.log(content.title);
  }*/
}
