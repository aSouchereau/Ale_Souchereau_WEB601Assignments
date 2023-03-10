import {Component, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {TownService} from "../services/town.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentList: Content[] = [];

  constructor(private townService: TownService) {
  }

  ngOnInit() {
    this.townService.getTowns().subscribe(towns => this.contentList = towns)
  }

  searchTerm: string = "";

  searchResult: any = {
    success: undefined,
    content: []
  }


  onSearchSubmit() {
    this.searchResult.success = this.contentList.filter(c => c.title === this.searchTerm).length > 0;
  }
}
