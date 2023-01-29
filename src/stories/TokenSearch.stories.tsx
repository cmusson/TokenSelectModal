import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import TokenSearch from "../components/TokenSearch";

export default {
  title: "TokenSelect/TokenList",
  component: TokenSearch,
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
} as ComponentMeta<typeof TokenSearch>;

const Template: ComponentStory<typeof TokenSearch> = (args: any) => (
  <TokenSearch {...args} />
);

export const Search = Template.bind({});
