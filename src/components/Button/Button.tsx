import PinButton from "./PinButton";
import PinnedToken from "./PinnedToken";
import TokenListItem from "./TokenListItem";
import UnpinButton from "./UnpinButton";
import { TokenKind } from "../../ReduxSlice/tokenSlice";

interface IProps {
  variant: "unpin" | "pin" | "pinnedToken" | "TokenListItem";
  onClick: () => void;
  token?: TokenKind;
}

const Button = ({ variant, onClick, token }: IProps) => {
  return (
    <>
      {variant === "unpin" ? (
        <UnpinButton onClick={onClick} />
      ) : variant === "pin" && token ? (
        <PinButton onClick={onClick} token={token} />
      ) : variant === "pinnedToken" && token ? (
        <PinnedToken token={token} />
      ) : variant === "TokenListItem" && token ? (
        <TokenListItem token={token} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Button;
