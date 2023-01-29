// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { TokenKind } from "./pinnedTokenSlice";

interface ActionPin {
  type: string;
  payload: { symbol: string };
}

const initialState: TokenKind[] = require("../config/tokens.json").filter(
  (token: TokenKind) => token.pinned
);

const filtersSlice = createSlice({
  name: "visibilityFilters",
  initialState: initialState,
  reducers: {
    setFilter(state, action) {
      if (action.payload === "") {
        return state;
      } else {
        console.log(action.payload[0]);
        const searchString = action.payload[0].toLowerCase();
        return action.payload[1].filter(
          (token: TokenKind) =>
            token.name.toLowerCase().includes(searchString) ||
            token.symbol.toLowerCase().includes(searchString) ||
            token.address.toLowerCase() === searchString
        );
      }
    },
    resetFilter(state, action) {
      //   console.log(action.payload);
      return action.payload;
    },
    filterPin: (state, action: ActionPin) => {
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

export const { setFilter, resetFilter, filterPin } = filtersSlice.actions;

export const selectFilterTokens = (state: RootState) => state.filterTokens;

export default filtersSlice.reducer;
