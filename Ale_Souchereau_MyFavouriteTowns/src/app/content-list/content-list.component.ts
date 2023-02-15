import { Component } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  searchTerm: string = ""

  searchResult: any = {
    success: undefined,
    content: []
  }

  contentList: Content[] = [
    {
      id: 1,
      title: 'Elora, ON',
      description: 'Elora is a historical community in the township of Centre Wellington. It is home to an estimated 7756 residents.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/elora.webp',
      type: 'community',
      tags: [ 'Southwest', 'Ontario', 'Wellington']
    },
    {
      id: 2,
      title: 'Huntsville, ON',
      description: 'Huntsville is a town in the District Municipality of Muskoka. It is home to 19,816 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/huntsville.jpg',
      type: 'town',
      tags: [ 'Central', 'Ontario', 'Muskoka']
    },
    {
      id: 3,
      title: 'Renfrew, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/renfrew.jpg',
      type: 'town',
      tags: [ 'Eastern', 'Ontario', 'Ottawa']
    },
    {
      id: 4,
      title: 'South River, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      type: 'village',
      tags: [ 'Central', 'Ontario', 'Parry Sound']
    },
    {
      id: 5,
      title: 'Sundridge, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      type: 'village',
      tags: [ 'Central', 'Ontario', 'Parry Sound']
    },
    {
      id: 6,
      title: 'Burks Falls, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      type: 'village',
      tags: [ 'Central', 'Ontario', 'Parry Sound']
    },
    {
      id: 7,
      title: 'Frankenmuth, MI',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/frankenmuth.jpg',
      tags: [ 'Eastern', 'Michigan', 'Saginaw']
    },
    {
      id: 8,
      title: 'Tobermory, ON',
      description: 'Renfrew is a town in Eastern Ontario, located about an hour west of the City of Ottawa. It is home to 8223 residents as of 2016.',
      creator: 'Alex Souchereau',
      imgURL: './assets/img/tobermory.jpg',
      tags: [ 'Southwestern', 'Ontario', 'Bruce']
    }
  ]


  onSearchSubmit() {
    this.searchResult.success = this.contentList.filter(c => c.title === this.searchTerm).length > 0;
  }
}
