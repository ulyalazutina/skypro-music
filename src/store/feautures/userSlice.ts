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
  isAuthorization: boolean;
  dateToken: string;
  errorValidate: {
    username: string;
    email: string;
    password: string;
  };
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
  isAuthorization: false,
  dateToken: "",
  errorValidate: {
    username: "",
    email: "",
    password: "",
  },
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
    setIsAuthorization: (state, action) => {
      state.isAuthorization = action.payload;
    },
    setDateToken: (state, action) => {
      state.dateToken = action.payload;
    },
    setErrorValidate: (state, action) => {
      state.errorValidate = action.payload
    }
  },
});

export const { setUser, setSignin, setSignup, setReset, setError, setIsAuthorization, setDateToken, setErrorValidate } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
