import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "phones.json";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState: {
  cartItems: {
    id: number;
    amount: number;
    price: number;
    title: string;
    img: string;
  }[];
  amount: number;
  total: number;
  isLoading: boolean;
} = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem?.amount != undefined) {
        cartItem.amount += 1;
      }
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem?.amount != undefined) {
        cartItem.amount -= 1;
      }
    },
    calcTotal: (state) => {
      let amount = 0,
        total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calcTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
