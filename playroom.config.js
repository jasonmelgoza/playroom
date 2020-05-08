module.exports = {
  components: "./src/components",
  outputPath: "./dist/playroom",

  // Optional:
  title: "My Awesome Library",
  // themes: './src/themes',
  // snippets: './playroom/snippets.js',
  // frameComponent: './playroom/FrameComponent.js',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: "/playroom/",
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
      ],
    },
  }),
};
