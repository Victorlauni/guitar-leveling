import type { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./navigation-menu";

const meta: Meta<typeof NavMenu> = {
  title: "Layout/NavigationMenu",
  component: NavMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {};
