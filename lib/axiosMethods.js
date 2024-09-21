import axios from "axios";

// reusable data geting fuction
export const getRequest = async (endpoint) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`
    );

    return response.data;
  } catch (error) {
    console.error("Get request error:", error.response?.data || error.message);
    throw error;
  }
};
