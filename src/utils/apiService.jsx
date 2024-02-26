const BASE_URL = "http://localhost:3001/api/v1/user";

const fetchData = async (endpoint, options) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}

const login = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  try {
    return await fetchData('/login', requestOptions);
  } catch (error) {
    throw new Error(error);
  }
}

const getUserProfile = async (token) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    return await fetchData('/profile', requestOptions);
  } catch (error) {
    throw new Error(error);
  }
}


export { fetchData, login, getUserProfile };
