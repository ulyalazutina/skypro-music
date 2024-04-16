import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = {
  user: userType,
  formSignin: {
    email:string,
    password: string,
  },
  formSignup: {
    username: string,
    email: string,
    password: string,
  }
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
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(state.user = action.payload);
      state.user = action.payload
    },
    setSignin: (state, action) => {
      state.formSignin = action.payload
    },
    setSignup: (state, action) => {
      state.formSignup = action.payload
    }
  },
});


export const {setUser, setSignin, setSignup} = userSlice.actions;
export const userReducer = userSlice.reducer;
