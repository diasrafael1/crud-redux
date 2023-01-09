import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  email: string;
}

let initialState: UserState[] = [
  { id: "1", name: "Amanda", email: "amanda@mail.com" },
  { id: "2", name: "Carlos", email: "carlos@mail.com" },
  { id: "3", name: "Rodrigo", email: "rodrigo@mail.com" },
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
    editUser: (
      state: UserState[],
      action: { payload: UserState; type: string }
    ) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (
      state: UserState[],
      action: { payload: string; type: string }
    ) => {
      const id = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
