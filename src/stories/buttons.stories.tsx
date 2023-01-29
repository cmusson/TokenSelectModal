import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Button from "../components/Button/Button";

const token = {
  symbol: "FRAX",
  name: "FRAX",
  address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
  colour: "#000000",
  image: "img/TokenIcons/fraxIcon.svg",
  decimals: 18,
  amount: "0.0",
  pinned: false,
};

const pinnedToken = {
  symbol: "FRAX",
  name: "FRAX",
  address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
  colour: "#000000",
  image: "img/TokenIcons/fraxIcon.svg",
  decimals: 18,
  amount: "0.0",
  pinned: true,
};

export default {
  title: "TokenSelect/TokenList/Buttons",
  component: Button,
  argTypes: {
    variant: {
      options: ["TokenListItem", "pinnedToken", "pin", "unpin"],
      control: { type: "radio" },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ width: 356 }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TokenListButtonPinned = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TokenListButtonPinned.args = {
  variant: "TokenListItem",
  token: pinnedToken,
};

export const TokenListButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TokenListButton.args = {
  variant: "TokenListItem",
  token: token,
};

export const PinnedButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PinnedButton.args = {
  variant: "pinnedToken",
  token: token,
};

export const PinButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PinButton.args = {
  variant: "pin",
  token: token,
};

export const UnpinButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnpinButton.args = {
  variant: "unpin",
};
