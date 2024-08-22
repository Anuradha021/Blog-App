import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  status: false,
  // You can add more initial states related to the profile if needed
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
      state.status = true;
    },
    logout: (state) => {
      state.userData = null;
      state.status = false;
    },
    updateProfile: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload.updatedData,
      };
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
