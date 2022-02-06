module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
    "../packages/**/*.stories.js" // ** 表示任意层次的文件夹 * 表示任意文件名
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue"
}