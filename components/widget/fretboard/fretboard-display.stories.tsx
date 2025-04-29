import { Meta, StoryObj } from "@storybook/react";
import FretboardDisplay from "./fretboard-display";

const meta: Meta<typeof FretboardDisplay> = {
  title: "Fretboard/FretboardDisplay",
  component: FretboardDisplay,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FretboardDisplay>;
export const Default: Story = {};
