import axios from 'axios';
import jwtDecode from 'jwt-decode';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response: any, addUser: any) => {
  const decode: any = jwtDecode(response.credential)
  const { name, picture, sub } = decode

  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };

  addUser(user);

  await axios.post(`${BASE_URL}/api/auth`, user);
};