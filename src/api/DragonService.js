import Axios from "axios";

export default class DragonService {

  static async list() {
    const { data } = await Axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
    return data;
  }

  static async create() {
    Axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
      name: "Teste",
      type: "Ar",
      histories: "Não temos dados sobre sua história",
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  static async delete(id) {
    Axios.delete('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/'+ id)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

  }

}