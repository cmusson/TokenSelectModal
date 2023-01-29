import styles from "./UnpinButton.module.scss";

interface IProps {
  onClick: () => void;
}

const UnpinButton = ({ onClick }: IProps) => {
  return (
    <div className={styles.unpinButton} onClick={onClick}>
      <img className={styles.unpinIcon} src="/img/x.svg" alt="unpin button" />
    </div>
  );
};

export default UnpinButton;
