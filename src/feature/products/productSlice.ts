import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { ProductModal } from "../../modals/ProductModal";

export const getMensProducts = createAsyncThunk(
  "product/get-mens-products",
  async (thunkAPI) => {
    return await productService.getMensProducts();
  }
);

export const getWomensProducts = createAsyncThunk(
  "product/get-womens-products",
  async (thunkAPI) => {
    return await productService.getWomensProducts();
  }
);

export const getMixedProducts = createAsyncThunk(
  "product/get-mixed-products",
  async (thunkAPI) => {
    return await productService.getMixedProducts();
  }
);

export interface ProductState {
  products: ProductModal[];
  mensProducts: ProductModal[];
  womensProducts: ProductModal[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: any;
}

const initialState: ProductState = {
  products: [],
  mensProducts: [],
  womensProducts: [],
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
      .addCase(getMensProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMensProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.mensProducts = action.payload;
      })
      .addCase(getMensProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getWomensProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWomensProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.womensProducts = action.payload;
      })
      .addCase(getWomensProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getMixedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMixedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getMixedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
