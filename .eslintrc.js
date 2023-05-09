/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:storybook/recommended",
  ],
  rules: {
    // Enable vue/script-setup-uses-vars rule
    "vue/script-setup-uses-vars": "off",
    "@typescript-eslint/no-unused-vars": "off", // uses in new <script setup>
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "@typescript-eslint/no-explicit-any": "off",
    "vue/multi-word-component-names": "off",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
