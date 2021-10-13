export default class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getData() {
    return fetch(`${this._baseUrl}/`, {
    })
    .then((res) => this._checkResponse(res));
  }
}