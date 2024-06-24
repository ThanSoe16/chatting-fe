import dayjs from "dayjs";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IMessagePayload {
  type: "message";
  message?: string;
  sender?: string;
  date: string;
}

interface IMessageState {
  value: IMessagePayload[];
}

const initialState: IMessageState = {
  value: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessagePayload>) => {
      const { type, message, sender } = action.payload;
      state.value = [
        ...state.value,
        {
          type,
          message,
          date: dayjs().format("h:mm A"),
          sender,
        },
      ];
    },

    insertMessage: (state, Action: PayloadAction<IMessagePayload[]>) => {
      state.value = Action.payload;
    },
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
