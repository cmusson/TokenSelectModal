import Button from "../Button";
import { useAppSelector } from "../../app/hooks";
import { selectFilterTokens } from "../../ReduxSlice/filterSlice";
import styles from "./TokenList.module.scss";

const TokenList = () => {
  const filter = useAppSelector(selectFilterTokens);
  return (
    <>
      <ul className={styles.list}>
        {filter.map((token) => (
          <Button
            key={`r${token.name}`}
            variant={"TokenListItem"}
            token={token}
            onClick={() => {}}
          />
        ))}
      </ul>
    </>
  );
};

export default TokenList;
