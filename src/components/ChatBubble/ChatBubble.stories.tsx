import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ChatBubble } from "./ChatBubble";

const meta: Meta<typeof ChatBubble> = {
  title: "IBM Carbon/ChatBubble",
  component: ChatBubble,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const FromUser: Story = {
  args: {
    message: "Can you tell me about the weather?",
    sender: "user",
    timestamp: "10:03 AM",
  },
};

export const FromAI: Story = {
  args: {
    message: "Sure. It's currently 72°F and sunny in your area.",
    sender: "ai",
    timestamp: "10:03 AM",
  },
};
