import axios from "axios";

async function fetchUser() {
  const url = `https://api.randomuser.me/`;
  console.log(url);
  return await axios.get(`${url}`);
}
export default fetchUser;
