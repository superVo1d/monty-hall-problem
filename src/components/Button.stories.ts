import Button from "./Button.vue";
import { Meta } from "@storybook/vue3";
import { ButtonType } from "@/types";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: {},
    type: {
      control: {
        type: "select",
      },
      options: ButtonType,
    },
  },
} as Meta;

export const PrimaryButton = {
  args: {
    type: ButtonType.primary,
    title: "Primary Button",
  },
};
