import type { Meta, StoryObj } from "@storybook/react";
import Layout from "./layout";
const meta: Meta<typeof Layout> = {
  title: "Layout",
  component: Layout,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {};
