import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pinnedTokenReducer from "../ReduxSlice/pinnedTokenSlice";
import tokenReducer from "../ReduxSlice/tokenSlice";
import filterTokenReducer from "../ReduxSlice/filterSlice";

export const store = configureStore({
  reducer: {
    tokens: tokenReducer,
    pinnedTokens: pinnedTokenReducer,
    filterTokens: filterTokenReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
