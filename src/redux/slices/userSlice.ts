import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UserState {
  id?: number;
  name: string;
  email: string;
}

const initialState: UserState[] = [
  { id: 1, name: "Amanda", email: "amanda@mail.com" },
  { id: 2, name: "Carlos", email: "carlos@mail.com" },
  { id: 3, name: "Rodrigo", email: "rodrigo@mail.com" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (
      state: UserState[],
      action: { payload: UserState; type: string }
    ) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
