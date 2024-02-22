const BASE_URL = "http://localhost:3001/api/v1/user";

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}

export async function login(email, password) {
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

export async function getUserProfile(token) {
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

export async function updateUserProfile(token, firstName, lastName) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  };

  try {
    return await fetchData('/profile', requestOptions);
  } catch (error) {
    throw new Error(error);
  }
}
