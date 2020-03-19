import Axios from "axios";

export default class DragonService {

  static async getById(id) {
    const { data } = await Axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id);
    return data;
  }

  static async list() {
    const { data } = await Axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
    return data;
  }

  static async create({ name, type, histories }) {
    await Axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
      name: name,
      type: type,
      histories: histories,
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  static async delete(id) {
    await Axios.delete('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  static async update({ id, name, type, histories }) {
    await Axios.put('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id, {
      name: name,
      type: type,
      histories: histories,
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

}