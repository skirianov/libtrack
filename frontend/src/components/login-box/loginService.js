import axios from 'axios';

const baseUrl = 'https://blooming-brook-04733.herokuapp.com/api/users';
const loginUrl = 'https://blooming-brook-04733.herokuapp.com/api/login';

const registerNewUser = async (user) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
};

const loginUser = async (userCredentials) => {
  try {
    const response = await axios.post(loginUrl, userCredentials);
    return response.data;
  } catch (error) {
    return '401';
  }
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const loginService = {
  registerNewUser,
  getAll,
  loginUser,
};

export default loginService;
