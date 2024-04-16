import { createSlice } from "@reduxjs/toolkit";

type UserStateType = {
  user: userType;
  formSignin: {
    email: string;
    password: string;
  };
  formSignup: {
    username: string;
    email: string;
    password: string;
  };
  error: string | null;
};

const initialState: UserStateType = {
  user: {
    id: 0,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  formSignin: {
    email: "",
    password: "",
  },
  formSignup: {
    username: "",
    email: "",
    password: "",
  },
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSignin: (state, action) => {
      state.formSignin = action.payload;
    },
    setSignup: (state, action) => {
      state.formSignup = action.payload;
    },
    setReset: () => {
      return initialState;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setSignin, setSignup, setReset, setError } = userSlice.actions;
export const userReducer = userSlice.reducer;
