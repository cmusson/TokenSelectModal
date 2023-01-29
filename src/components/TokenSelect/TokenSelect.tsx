import PinnedTokenList from "../PinnedTokenList";
import TokenList from "../TokenList";
import TokenSearch from "../TokenSearch";
import styles from "./TokenSelect.module.scss";

const TokenSelect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <img className={styles.clearIcon} src="./img/x.svg" alt="close modal" />
      </div>
      <h2 className={styles.title}>Select Token</h2>
      <TokenSearch />
      <PinnedTokenList />
      <TokenList />
    </div>
  );
};

export default TokenSelect;
