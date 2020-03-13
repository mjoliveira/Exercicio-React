import Axios from "axios";

export default class DragonService {

  static async list() {
    const { data } = await Axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
    return data;
  }

  static async creat() {
    Axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
      name: "Tom",
      type: "Ar",
      histories: "Não temos dados sobre sua história",
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  static async delete() {
    Axios.delete('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/1')
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

  }

}