import { Component } from '@angular/core';
import { ContentList } from "../helper-files/ContentList";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();
  contentItems() {
    this.contentList.addContent(
      {
        id: 1,
        title: 'Elora, ON',
        description: 'Elora is a historical community in the township of Centre Wellington. It is home to an estimated 7756 residents.',
        creator: 'Alex Souchereau',
        imgURL: './assets/img/elora.webp',
        type: 'Community'
      });
    this.contentList.addContent(
      {
        id: 2,
        title: 'Huntsville, ON',
        description: 'Huntsville is a town in the District Municipality of Muskoka. It is home to 19,816 residents as of 2016.',
        creator: 'Alex Souchereau',
        imgURL: './assets/img/huntsville.jpg',
        type: 'Town'
      });
    this.contentList.addContent(
      {
        id: 3,
        title: 'Renfrew, ON',
        description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
        creator: 'Alex Souchereau',
        imgURL: './assets/img/renfrew.jpg',
        type: 'Town'
      });
  }
}
