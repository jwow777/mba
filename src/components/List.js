export default class List {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }

  addItemArr(element) {
    this._container.append(element);
  }

  renderItems(data) {
    data.map((item) => this._renderer(item));
  }
}