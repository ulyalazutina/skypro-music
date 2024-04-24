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
  isAuthorization: boolean;
  // dateToken: string;
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
  isAuthorization: false,
  // dateToken: "",
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
    setIsAuthorization: (state, action) => {
      state.isAuthorization = action.payload;
    },
    // setDateToken: (state, action) => {
    //   state.dateToken = action.payload;
    // },
  },
});

export const { setUser, setSignin, setSignup, setReset,  setIsAuthorization } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
