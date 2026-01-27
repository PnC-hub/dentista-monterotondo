export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org'
  ],

  site: {
    url: 'https://dentistamonterotondo.com',
    name: 'Dentista Monterotondo - Studio Dentistico Smiledoc',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Dentista Monterotondo | Studio Dentistico Smiledoc | Implantologia e Ortodonzia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Cerchi un dentista a Monterotondo? Studio Dentistico Smiledoc: implantologia, ortodonzia, igiene dentale, sbiancamento. Prenota ora la tua visita gratuita!'
        },
        { name: 'keywords', content: 'dentista monterotondo, studio dentistico monterotondo, implantologia monterotondo, ortodonzia monterotondo, dentista roma nord, smiledoc monterotondo' },
        { property: 'og:title', content: 'Dentista Monterotondo | Studio Dentistico Smiledoc' },
        { property: 'og:description', content: 'Studio dentistico a Monterotondo. Implantologia, ortodonzia, igiene dentale. Prenota la tua visita gratuita!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dentistamonterotondo.com' },
        { property: 'og:locale', content: 'it_IT' },
        { name: 'geo.region', content: 'IT-RM' },
        { name: 'geo.placename', content: 'Monterotondo' },
        { name: 'geo.position', content: '42.0533;12.6186' },
        { name: 'ICBM', content: '42.0533, 12.6186' },
      ],
      link: [
        { rel: 'canonical', href: 'https://dentistamonterotondo.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  sitemap: {
    hostname: 'https://dentistamonterotondo.com',
  },

  robots: {
    sitemap: '/sitemap.xml',
  },

  schemaOrg: {
    identity: {
      type: 'Dentist',
      name: 'Studio Dentistico Smiledoc Monterotondo',
      url: 'https://dentistamonterotondo.com',
      logo: 'https://dentistamonterotondo.com/logo.png',
      image: 'https://dentistamonterotondo.com/studio.jpg',
      telephone: '+39 06 90627274',
      email: 'info@smiledoc.it',
      address: {
        streetAddress: 'Via Monte Circeo 12',
        addressLocality: 'Monterotondo',
        addressRegion: 'RM',
        postalCode: '00015',
        addressCountry: 'IT'
      },
      geo: {
        latitude: 42.0533,
        longitude: 12.6186
      },
      openingHoursSpecification: [
        { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
        { dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' }
      ],
      priceRange: '€€',
      sameAs: [
        'https://www.facebook.com/smiledocmonterotondo',
        'https://www.instagram.com/smiledoc_monterotondo'
      ]
    }
  },

  nitro: {
    preset: 'node-server',
    output: {
      dir: 'output',
      serverDir: 'output/server',
      publicDir: 'output/public'
    }
  }
})
