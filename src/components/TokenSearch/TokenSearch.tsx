import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { resetFilter, setFilter } from "../../ReduxSlice/filterSlice";
import { selectTokens } from "../../ReduxSlice/tokenSlice";
import styles from "./TokenSearch.module.scss";

const TokenSearch = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens);

  return (
    <div className={styles.tokenSearch}>
      <img
        className={styles.searchIcon}
        src="img/searchIcon.svg"
        alt="search"
      />
      <input
        type="text"
        // autoFocus
        placeholder="Search by name or paste address"
        onChange={(text: React.FormEvent<HTMLInputElement>) => {
          setSearchInput(text.currentTarget.value);
          dispatch(setFilter([text.currentTarget.value, tokens]));
        }}
        onKeyDown={(text: any) => {
          if (text.keyCode === 8) {
            dispatch(resetFilter(tokens));
            dispatch(setFilter([text.currentTarget.value, tokens]));
          }
        }}
        value={searchInput}
      />
      <img
        className={searchInput.length ? styles.clearIcon : styles.noClearIcon}
        src="img/x.svg"
        alt="search"
        onClick={() => {
          setSearchInput("");
          dispatch(resetFilter(tokens));
        }}
      />
    </div>
  );
};

export default TokenSearch;
