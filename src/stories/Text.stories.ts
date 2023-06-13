import type { Meta, StoryObj } from "@storybook/react";
import Text from "src/components/Text/Text.tsx";

const meta = {
  title: "Example/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    as: Text,
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "medium",
    children: "Hello World",
  },
};
