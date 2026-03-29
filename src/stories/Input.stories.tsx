import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
    label: "Label",
    hint: "",
    errorMessage: "",
    disabled: false,
    state: "default",
    style: { width: "250px" },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    errorMessage: { control: "text" },
    disabled: { control: "boolean" },
    state: {
      control: "select",
      options: ["default", "error", "success"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithHint: Story = {
  args: {
    label: "Username",
    hint: "Must be at least 3 characters",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    errorMessage: "Invalid email address",
  },
};

export const Success: Story = {
  args: {
    label: "Username",
    state: "success",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled input",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
};
