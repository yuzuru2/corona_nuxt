import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',
  head: {
    title: '東京２３区 コロナ対策給付金支給チェッカー',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '東京２３区 コロナ対策給付金支給チェッカーです',
      },
    ],
  },
  loading: { color: '#fff' },
  css: ['@/assets/css/style.css'],
  plugins: [],
  modules: ['bootstrap-vue/nuxt'],
  buildModules: ['@nuxt/typescript-build'],
  axios: {},
  build: {
    extend(config: any, ctx: any) {},
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
};

export default config;
