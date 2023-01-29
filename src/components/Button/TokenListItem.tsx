import { useAppDispatch } from "../../app/hooks";
import { filterPin } from "../../ReduxSlice/filterSlice";
import { pinn, TokenKind, unpin } from "../../ReduxSlice/pinnedTokenSlice";
import { pin } from "../../ReduxSlice/tokenSlice";
import PinButton from "./PinButton";
import styles from "./TokenListItem.module.scss";


interface IProps {
  token: TokenKind;
}

const TokenListItem = ({ token }: IProps) => {
  const dispatch = useAppDispatch();
  const handlePin = () => {
    dispatch(pin(token));
    dispatch(filterPin(token));
    if (token.pinned) dispatch(unpin(token));
    if (!token.pinned) dispatch(pinn(token));
  };

  return (
    <li>
      <button className={styles.tokenButton}>
        {
          <div className={styles.contentContainer}>
            <div className={styles.leftContainer}>
              <img
                className={styles.icon}
                src={token.image}
                alt={`${token.name} icon`}
              />
              <div className={styles.leftText}>
                <h5 className={styles.name}>{token.name}</h5>
                <h6 className={styles.symbol}>{token.symbol}</h6>
              </div>
            </div>

            <div className={styles.rightContainer}>
              <h5 className={styles.amount}>{`$${token.amount}`}</h5>
              <PinButton onClick={handlePin} token={token} />
            </div>
          </div>
        }
      </button>
    </li>
  );
};

export default TokenListItem;
