import { Meta, StoryObj } from "@storybook/react";
import ChordExplorer from "./chord-explorer";

const meta: Meta<typeof ChordExplorer> = {
  title: "Tools/ChordExplorer",
  component: ChordExplorer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChordExplorer>;
export const Default: Story = {};
