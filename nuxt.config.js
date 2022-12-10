export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/stryfe200fps.github.io/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Adi is a dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Adrian\'s portfolio website' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-url', property: 'og:url', content: 'https://adi.is-a.dev' },
      { hid: 'og-image', property: 'og:image',
      content: 'https://media-exp1.licdn.com/dms/image/D5603AQEaxwA2vWOr-w/profile-displayphoto-shrink_200_200/0/1670525231585?e=1675900800&v=beta&t=7wvHJJ0XTtADoPHulU-b_0GEQt--UbcfwK8DZP1twWo'
      },
      { hid: 'og-title', property: 'og:title', content: 'Adrian Radores Personal Website' },
      { hid: 'og-desc', property: 'og:description', content: 'I\'m Adrian Radores. A web programmer from The Philippines' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
