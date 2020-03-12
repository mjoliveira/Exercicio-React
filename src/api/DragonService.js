import Axios from "axios";

export default class DragonService {

  static async getDragonList() {
    const { data } = await Axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
    return data;
  }

}