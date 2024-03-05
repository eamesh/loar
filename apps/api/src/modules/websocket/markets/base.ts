import axios from 'axios';

export class Base {
  url: string;

  async requestList(data) {
    // console.log(this.url, data);
    try {
      return await axios.post(this.url, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      throw Error(error);
    }
  }
}
