import { Component } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  ContentList: Content[] = [
    {
      id: 1,
      title: 'Elora, ON',
      description: 'Elora is a historical community in the township of Centre Wellington. It is home to an estimated 7756 residents.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/elora.webp',
      type: 'Community',
      tags: [ 'Southwest', 'Ontario', 'Wellington']
    },
    {
      id: 2,
      title: 'Huntsville, ON',
      description: 'Huntsville is a town in the District Municipality of Muskoka. It is home to 19,816 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/huntsville.jpg',
      type: 'Town',
      tags: [ 'Central', 'Ontario', 'Muskoka']
    },
    {
      id: 3,
      title: 'Renfrew, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/renfrew.jpg',
      tags: [ 'Eastern', 'Ontario', 'Ottawa']
    },
    {
      id: 4,
      title: 'Renfrew1, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/renfrew.jpg',
      type: 'Town'
    },
    {
      id: 5,
      title: 'Renfrew2, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      type: 'Town',
      tags: [ 'Eastern', 'Ontario', 'Ottawa']
    },
    {
      id: 6,
      title: 'Renfrew3, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/renfrew.jpg',
      type: 'Town',
      tags: [ 'Eastern', 'Ontario', 'Ottawa']
    },
    {
      id: 7,
      title: 'Renfrew4, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/renfrew.jpg',
      type: 'Town',
      tags: [ 'Eastern', 'Ontario', 'Ottawa']
    },
    {
      id: 8,
      title: 'Renfrew5, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/renfrew.jpg',
      type: 'Town',
      tags: [ 'Eastern', 'Ontario', 'Ottawa']
    }
  ]

  imgClick(message : string) {
    console.log(message);
  }




}
