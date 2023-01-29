import { pin, TokenKind } from "../../ReduxSlice/tokenSlice";
import UnpinButton from "./UnpinButton";
import { unpin } from "../../ReduxSlice/pinnedTokenSlice";
import { useAppDispatch } from "../../app/hooks";
import { filterPin } from "../../ReduxSlice/filterSlice";
import styles from "./PinnedToken.module.scss";


interface IProps {
  token: TokenKind;
}

const PinnedToken = ({ token }: IProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(unpin(token));
    dispatch(pin(token));
    dispatch(filterPin(token));
  };
  return (
    <li className={styles.listItem}>
      <button className={styles.selectTokenButton}>
        <img
          className={styles.icon}
          src={token.image}
          alt={`${token.name} icon`}
        />
        {`${token.symbol}`}
        <div className={styles.unpinContainer}>
          <UnpinButton onClick={handleClick} />
        </div>
      </button>
    </li>
  );
};

export default PinnedToken;
