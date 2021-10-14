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
    return fetch(`${this._baseUrl}api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`, {
    })
    .then((res) => this._checkResponse(res));
  }
}