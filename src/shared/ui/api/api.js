import axios from "axios";

class publicAPI {
  _BASE_URL = "https://api.github.com";
  _USERS_URL = "/users";
  
  fetchUsers = async page => {
    try {
      const { data } = await axios.get(
        `${this._BASE_URL}${this._USERS_URL}?since=${page * 10}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const PublicApi = new publicAPI();