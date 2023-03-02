import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {


  submitHandler(formData: NgForm) {
    console.log(formData.value);
    console.log(formData.valid);
  }
}
