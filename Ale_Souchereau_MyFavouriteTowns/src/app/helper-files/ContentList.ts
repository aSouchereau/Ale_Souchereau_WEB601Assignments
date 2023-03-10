import {Content} from "./content-interface";

export class ContentList {
  private content: Content[];

  constructor() {
    this.content = [];
  }

  /**
   * Getter method that returns Content Array
   * @returns ContentList.content
   */
  getContent() {
    return this.content
  }

  /**
   * Adds Content item to ContentList.content array
   * @param item
   */
  addContent(item: Content) {
    this.content.push(item);
  }

  /**
   * Returns the length of the content array.
   * @returns ContentList.content.length
   */
  getContentLength() {
    return this.content.length;
  }

  /**
   * Returns reader friendly HTML for a content item.
   * @param index
   * @returns HTML content string
   */
  getContentItem(index: number) {
    if (index <= this.getContentLength() - 1 && index >= 0) {
      return `
      <h2>${this.content[index].title}</h2>

      <p>${this.content[index].description}</p>

      <span> - posted by ${this.content[index].creator}</span>

      <img src="${this.content[index].imgURL}" alt="Image: ${this.content[index].title}" width="100%" />

      <p>${this.content[index].type}</p>
    `;
    } else {
      return `
      <h2>Error</h2>
      <p>No content found at index ${index}</p>
      `;
    }

  }
}
