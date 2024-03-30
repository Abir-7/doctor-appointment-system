import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string | number;
  role: string;
  isVerified: boolean;
  userLoading: boolean;
  specialist:string;
}

export interface PayloadType {
    email: string;
    firstName: string;
    lastName: string;
    mobile: string | number;
    role: string;
    specialist:string;
  }

const initialState: UserState = {
  email: "",
  firstName: "",
  lastName: "",
  mobile: "",
  role: "",
  specialist:'',
  isVerified: false,
  userLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<PayloadType>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.mobile = action.payload.mobile;
      state.role = action.payload.role;
      state.specialist = action.payload.specialist;
    },
    removeUserData: (state) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.mobile = "";
      state.role = "";
      state.specialist='';
    },
    setUserLoading:(state, action: PayloadAction<boolean>)=>{
       state.userLoading=action.payload
    },
    setIsVerified:(state, action: PayloadAction<boolean>)=>{
        state.isVerified=action.payload
     }
  },
});

export const { addUserData, removeUserData,setUserLoading,setIsVerified } = userSlice.actions;

export default userSlice.reducer;
