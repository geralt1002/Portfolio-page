module.exports = {
   root: true,
   env: {
     node: true,
   },
   extends: [
     'plugin:vue/vue3-recommended',
     'eslint:recommended',
     'prettier',
   ],
  plugins: ['vue'],
    rules: {
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true,
        ignore: [],
      },
    ],
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
  },
 }