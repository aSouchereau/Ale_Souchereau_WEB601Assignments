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

  currentError: string = "";

  submitHandler() {
    this.emitNewItem()
      .then((success) => {
        console.log(success + ' ' +this.newTownItem.title);
        // clear error message
        this.currentError = "";
        // clear input fields
        this.newTownItem = {
          id: 0,
          title: "",
          description: "",
          creator: "",
          imgURL: "",
          type: "",
          tags: []
        }

      })
      .catch((err) => {
        console.log(err);
        this.currentError = err;
      });
  }

  emitNewItem() {
    return new Promise((success, fail) => {
      if (this.newTownItem.id && this.newTownItem.title && this.newTownItem.description && this.newTownItem.creator) {
        // If new item has tags, split into array
        if (this.newTownItem.tags)
          this.newTownItem.tags = this.newTownItem.tags.toString().split(',');

        this.newTownEvent.emit(this.newTownItem);

        let tempBool = true; // Temporary solution for now, cannot figure out how to check if emit function worked
        if (tempBool) {
          success("New item added successfully");
        } else {
          fail("Could not add new item.");
        }
      } else {
        fail("Please fill in all required fields");
      }
    });
  }
}
