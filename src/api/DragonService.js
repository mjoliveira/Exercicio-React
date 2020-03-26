import Axios from "axios";

const baseUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api';

export default class DragonService {

  static async getById(id) {
    const { data } = await Axios.get(`${baseUrl}/v1/dragon/${id}`);
    return data;
  }

  static async list() {
    const { data } = await Axios.get(`${baseUrl}/v1/dragon`);
    return data;
  }

  static async create({ name, type, histories }) {
    const { data } = await Axios.post(`${baseUrl}/v1/dragon`, { name, type, histories });
    return data;
  }

  static async delete(id) {
    const { data } = await Axios.delete(`${baseUrl}/v1/dragon/${id}`);
    return data;
  }

  static async update({ id, name, type, histories }) {
    const { data } = await Axios.put(`${baseUrl}/v1/dragon/${id}`, { name, type, histories });
    return data;
  }

}