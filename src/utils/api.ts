import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  async function fetchUsers() {
    return await axios.get(`${BASE_URL}/users`);
  }

  return {
    fetchUsers
  }
})();

export default api;
