import { useAppSelector } from "../../app/hooks";
import { selectPinnedTokens } from "../../ReduxSlice/pinnedTokenSlice";
import Button from "../Button";
import styles from "./PinnedTokenList.module.scss";

const PinnedTokenList = () => {
  const pinned = useAppSelector(selectPinnedTokens);
  return (
    <>
      <ul className={styles.list}>
        {pinned.map((token) => (
          <Button
            key={token.symbol}
            variant={"pinnedToken"}
            token={token}
            onClick={() => {}}
          />
        ))}
      </ul>
      <hr
        style={{
          backgroundColor: "white",
          width: "90%",
        }}
      />
    </>
  );
};

export default PinnedTokenList;
