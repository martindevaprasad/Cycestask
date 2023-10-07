import axios from "axios";


const token = localStorage.getItem("token")
console.log(token);

export const getLocations = async () => {
  const response = await axios.get("https://www.melivecode.com/api/attractions");
  return response.data;
};

export const createLocation = async (location) => {
  const response = await axios.post(
    "https://www.melivecode.com/api/auth/attractions/create",
    location,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateLocation = async (location) => {
  const response = await axios.put(
    "https://www.melivecode.com/api/auth/attractions/update",
    location,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteLocation = async (id) => {
  const response = await axios.delete(
    "https://www.melivecode.com/api/auth/attractions/delete",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id,
      },
    }
  );
  return response.data;
};

export const getLocationDetail = async (id) => {
  const response = await axios.get(
    `https://www.melivecode.com/api/attractions/${id}`
  );
  return response.data;
};


export const login = async (username, password) => {
    const response = await axios.post("https://www.melivecode.com/api/login", {
      username,
      password,
    });
  
    return response.data;
  };