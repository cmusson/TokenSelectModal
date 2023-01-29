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

const initialState: TokenKind[] = require("../config/tokens.json").filter(
  (token: TokenKind) => token.pinned
);

interface ActionUnpin {
  type: string;
  payload: { symbol: string };
}

interface ActionPin {
  type: string;
  payload: TokenKind;
}

export const pinnedTokenSlice = createSlice({
  name: "pinned",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    pinn: (state, action: ActionPin) => {
      // push if not presenet
      const pinned = Object.assign({}, action.payload, { pinned: true });
      const ned = [...state, pinned];
      return ned;
    },
    // filter if present
    unpin: (state, action: ActionUnpin) => {
      const newState: TokenKind[] = state.filter(
        (token) => token.symbol !== action.payload.symbol
      );
      return newState;
    },

    searchFilter: (state, action: ActionPin) => {},
  },
});

export const selectPinnedTokens = (state: RootState) => state.pinnedTokens;

export const { pinn, unpin } = pinnedTokenSlice.actions;

export default pinnedTokenSlice.reducer;
