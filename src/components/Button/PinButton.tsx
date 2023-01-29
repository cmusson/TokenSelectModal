import { TokenKind } from "../../ReduxSlice/tokenSlice";
import styles from "./PinButton.module.scss";

interface IProps {
  token: TokenKind;
  onClick: () => void;
}

const PinButton = ({ token, onClick }: IProps) => {
  return (
    <div className={styles.pinButton} onClick={onClick}>
      {token.pinned ? (
        <img
          className={styles.pinIcon}
          src="/img/pinnedIcon.svg"
          alt="unpin button"
        />
      ) : (
        <img
          className={styles.pinIcon}
          src="/img/pinIcon.svg"
          alt="pin button"
        />
      )}
    </div>
  );
};

export default PinButton;
