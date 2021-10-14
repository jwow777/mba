import List from "./List";
import minus from "../images/minus.svg";
import plus from "../images/plus.svg";

export default class Module {
  constructor(data, moduleElement, createModuleListItem) {
    this.data = data.items;
    this.id = data.id;
    this.moduleElement = moduleElement;
    this._createModuleListItem = createModuleListItem;
  }

  _getTemplate() {
    const element = this.moduleElement.content.querySelector(".module").cloneNode(true);
    return element;
  }

  generateModule() {
    this._element = this._getTemplate();
    this._blockTitle = this._element.querySelector(".module__block-title");
    this._icon = this._element.querySelector(".module__icon");
    this._icon.src = plus;
    this._icon.alt = 'плюс';
    this._name = this._element.querySelector(".title_module");
    this._name.textContent = `${this.id} модуль`;
    this._moduleListElement = this._element.querySelector(".list_module");
    this._moduleList = new List(data => this._moduleList.addItemArr(this._createModuleListItem(data)), this._moduleListElement);
    this._moduleList.renderItems(this.data);
    this._setEventListeners();
    return this._element;
  }

  _isOpen(element, icon) {
    element.classList.toggle("module_opened");
    if (element.classList.contains("module_opened")) {
      icon.src = minus;
      this._icon.alt = 'минус';
    } else {
      icon.src = plus;
      this._icon.alt = 'плюс';
    }
  }

  _setEventListeners() {
    this._blockTitle.addEventListener("click", () => this._isOpen(this._element, this._icon));
  }
}