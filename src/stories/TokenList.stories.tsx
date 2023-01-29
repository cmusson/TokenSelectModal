import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import TokenList from "../components/TokenList";

export default {
  title: "TokenSelect/TokenList",
  component: TokenList,
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ width: 356 }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof TokenList>;

const Template: ComponentStory<typeof TokenList> = (args: any) => (
  <TokenList {...args} />
);

export const ListedTokens = Template.bind({});
