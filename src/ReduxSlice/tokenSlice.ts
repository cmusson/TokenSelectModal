import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface TokenKind {
  symbol: string;
  name: string;
  address: string;
  colour: string;
  image: string;
  decimals: number;
  amount: string;
  pinned: boolean;
}

const initialState: TokenKind[] = require("../config/tokens.json");

interface ActionPin {
  type: string;
  payload: { symbol: string };
}

// THIS COULD BE USED TO HAVE ALL TOKENSELECT DATA CONTAINED WITHIN ONE STATE MAYBE
const initialStateData = {
  tokenlists: {
    tokens: initialState,
    pinned: initialState,
    filter: initialState,
  },
  status: "idle",
  error: null,
};

export const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    pin: (state, action: ActionPin) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      return state.map((token) => {
        if (token.symbol !== action.payload.symbol) {
          return token;
        }
        return { ...token, pinned: !token.pinned };
      });
    },
  },
});

export const selectTokens = (state: RootState) => state.tokens;

export const { pin } = tokenSlice.actions;

export default tokenSlice.reducer;
