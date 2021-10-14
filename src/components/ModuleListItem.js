export default class ModuleListItem {
  constructor(data, moduleElement) {
    this.data = data;
    this._moduleElement = moduleElement;
  }

  _getTemplate() {
    const element = this._moduleElement.content.querySelector(".list__item_module").cloneNode(true);
    return element;
  }

  generateModuleListItem() {
    this._element = this._getTemplate();
    this._element.textContent = this.data;
    return this._element;
  }
}