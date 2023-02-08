import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentList: Content[], searchTerm?: string) {
    let filteredList : Content[] = contentList.filter(c => c.type === searchTerm);
    return filteredList;
  }

}
