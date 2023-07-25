import { appTools, defineConfig } from '@modern-js/app-tools';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    port: 1010,
  },
  plugins: [appTools()],
  tools: {
    terser: {
      terserOptions: {
        ecma: 2016,
        module: true,
        compress: {
          passes: 2,
          keep_infinity: true,
          arguments: true,
          ecma: 2016,
        },
        mangle: {
          safari10: false, // drop safari10/11 support
        },
      },
    },
    webpackChain: chain => {
      chain.plugin('vanilla-extract').use(VanillaExtractPlugin);
    },
  },
});
