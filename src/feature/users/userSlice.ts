import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModal } from "../../modals/ProductModal";
import userService from "./userService";
import { LoginUserModal } from "../../modals/LoginUserModal";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "users/login",
  async (userData: LoginUserModal, thunkAPI) => {
    return await userService.loginUser(userData);
  }
);

export const resetState = createAction("RevertAll");

const getTokenFromLocalStorage: { [key: string]: any } | null = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;

export interface ProductState {
  users: ProductModal[];
  user: any,
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: any;
}

const initialState: ProductState = {
  users: [],
  user: getTokenFromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.user = action.payload;
      if (state.isSuccess === true) {
        toast.success("Successfully Logged In");
      }
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      if (state.isError === true) {
        toast.error("Your Username or Password is Incorrect");
      }
    })
    .addCase(resetState, () => initialState);
  }
});

export default productSlice.reducer;
