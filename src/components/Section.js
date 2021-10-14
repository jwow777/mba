import List from "./List";

export default class Section {
  constructor(data, sectionElement, createModule) {
    this.data = data;
    this.sectionElement = sectionElement;
    this._createModule = createModule;
    this._title = data.title;
  }

  _getTemplate() {
    const element = this.sectionElement.content.querySelector(".section").cloneNode(true);
    return element;
  }

  generateSection() {
    this._element = this._getTemplate();
    this._name = this._element.querySelector(".title_section");
    this._name.textContent = this._title;
    this._modulesListElement = this._element.querySelector(".list_section");
    this._modulesList = new List(data => this._modulesList.addItemArr(this._createModule(data)), this._modulesListElement);
    this._modulesList.renderItems([{ id: 1, items: this.data.specializedSubjects.slice(0, 5) }, { id: 2, items: this.data.specializedSubjects.slice(5) }]);
    return this._element;
  }
}