import {Component, EventEmitter, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {

  @Output() newTownEvent = new EventEmitter<Content>();

  newTownItem: Content = {
    id: 0,
    title: "",
    description: "",
    creator: "",
    imgURL: "",
    type: "",
    tags: []
  };


  submitHandler() {
    if (this.newTownItem.tags)
      this.newTownItem.tags = this.newTownItem.tags.toString().split(',');
    this.newTownEvent.emit(this.newTownItem);
  }
}
