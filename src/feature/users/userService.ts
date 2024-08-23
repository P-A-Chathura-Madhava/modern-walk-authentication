import axios from "axios";
import { LoginUserModal } from "../../modals/LoginUserModal";

const getTokenFromLocalStorage: { [key: string]: any } | null = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

const loginUser = async (userData: LoginUserModal) => {
    const response = await axios.post(
      `https://fakestoreapi.com/auth/login`,
      userData
    );
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
  }    
  };

const userService = {
    loginUser
};

export default userService;
