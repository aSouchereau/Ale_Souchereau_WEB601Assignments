import {Pipe, PipeTransform} from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentList: Content[], filter?: string) {
    if (contentList) {
      if (filter) {
        return contentList.filter(c => c.type === filter);
      } else {
        return contentList.filter(c => (c.type === '' || c.type === null || c.type === undefined))
      }
    } else return;
  }

}
