import type { Meta, StoryObj } from "@storybook/react";
import FretboardView from "./fretboard-display";

const meta: Meta<typeof FretboardView> = {
  title: "FretboardView",
  component: FretboardView,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FretboardView>;

export const Default: Story = {};
