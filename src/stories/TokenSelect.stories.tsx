import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import TokenSelect from "../components/TokenSelect";

export default {
  title: "TokenSelect/TokenSelectModal",
  component: TokenSelect,
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ width: "100%" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof TokenSelect>;

const Template: ComponentStory<typeof TokenSelect> = (args: any) => (
  <TokenSelect {...args} />
);

export const TokenSelectModal = Template.bind({});
