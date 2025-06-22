import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type UserType = {
  userID: string;
  email: string | null;
  userName: string | null;
  password: string | null;
  signInMethod: 'GoogleSignIn' | 'EmailSignIn' | null;
} | null;

const initialState: {user: UserType} = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    clearAuth: state => {
      state.user = null;
    },
    updateUserField: (
      state,
      action: PayloadAction<{key: keyof NonNullable<UserType>; value: string}>,
    ) => {
      if (state.user) {
        (state.user[action.payload.key] as string | null) =
          action.payload.value;
      }
    },
  },
});

export const {setAuth, clearAuth, updateUserField} = authSlice.actions;
export default authSlice.reducer;
