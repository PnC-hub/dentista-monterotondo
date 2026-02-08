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
    name: 'Dentista Monterotondo - Studio Dentistico',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Dentista Monterotondo | Studio Dentistico Via Monte Circeo 12 | Cure Dentali di Qualità',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Cerchi un dentista a Monterotondo? Studio dentistico in Via Monte Circeo 12 con tecnologie digitali avanzate. Implantologia, ortodonzia, igiene dentale. Chiama 06 906 23 936'
        },
        { name: 'keywords', content: 'dentista monterotondo, studio dentistico monterotondo, dentista via monte circeo, implantologia monterotondo, ortodonzia monterotondo, dentista roma nord, dentista mentana, dentista fonte nuova, igiene dentale monterotondo, faccette dentali monterotondo, smile makeover roma nord, sedazione cosciente monterotondo, dentista senza dolore, all on 4 monterotondo, denti fissi monterotondo, riabilitazione orale completa, tecnologie dentali avanzate' },
        { property: 'og:title', content: 'Dentista Monterotondo | Studio Dentistico | Cure Dentali di Qualità' },
        { property: 'og:description', content: 'Studio dentistico a Monterotondo in Via Monte Circeo 12. Implantologia, ortodonzia, igiene dentale con tecnologie digitali avanzate. Chiama 06 906 23 936' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dentistamonterotondo.com' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:image', content: 'https://dentistamonterotondo.com/img/og-image.png' },
        { property: 'og:site_name', content: 'Dentista Monterotondo' },
        { name: 'geo.region', content: 'IT-RM' },
        { name: 'geo.placename', content: 'Monterotondo' },
        { name: 'geo.position', content: '42.0533;12.6186' },
        { name: 'ICBM', content: '42.0533, 12.6186' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Studio Dentistico Monterotondo' },
      ],
      link: [
        { rel: 'canonical', href: 'https://dentistamonterotondo.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ],
      // Analytics/tracking scripts removed - loaded by CookieBanner after consent
      script: [],
      noscript: []
    }
  },

  sitemap: {
    hostname: 'https://dentistamonterotondo.com',
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/implantologia', priority: 0.9, changefreq: 'monthly' },
      { loc: '/ortodonzia', priority: 0.9, changefreq: 'monthly' },
      { loc: '/igiene-dentale', priority: 0.9, changefreq: 'monthly' },
      { loc: '/estetica-dentale', priority: 0.9, changefreq: 'monthly' },
      { loc: '/endodonzia', priority: 0.9, changefreq: 'monthly' },
      { loc: '/odontoiatria-pediatrica', priority: 0.9, changefreq: 'monthly' },
      { loc: '/prenota', priority: 0.8, changefreq: 'monthly' },
      { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
      { loc: '/blog/quanto-costa-dentista-monterotondo', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/come-scegliere-dentista-monterotondo', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/implantologia-dentale-guida-completa', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/ortodonzia-invisibile-adulti', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/paura-del-dentista-come-superarla', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/igiene-orale-bambini-consigli', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/sbiancamento-denti-professionale', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/dente-del-giudizio-quando-toglierlo', priority: 0.7, changefreq: 'monthly' },
      { loc: '/faccette-estetiche', priority: 0.9, changefreq: 'monthly' },
      { loc: '/sedazione-cosciente', priority: 0.9, changefreq: 'monthly' },
      { loc: '/riabilitazione-completa', priority: 0.9, changefreq: 'monthly' },
      { loc: '/tecnologie', priority: 0.8, changefreq: 'monthly' },
      { loc: '/blog/faccette-dentali-guida-completa', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/sedazione-cosciente-guida', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/all-on-4-vs-protesi-mobile', priority: 0.7, changefreq: 'monthly' },
      { loc: '/privacy', priority: 0.3, changefreq: 'yearly' },
      { loc: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
    ]
  },

  robots: {
    sitemap: '/sitemap.xml',
  },

  schemaOrg: {
    identity: {
      type: 'Dentist',
      name: 'Dentista Monterotondo',
      url: 'https://dentistamonterotondo.com',
      logo: 'https://dentistamonterotondo.com/img/og-image.png',
      image: 'https://dentistamonterotondo.com/img/hero-studio.webp',
      telephone: '+39 06 906 23 936',
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
        { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' }
      ],
      priceRange: '$$',
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '187',
        bestRating: '5',
        worstRating: '1'
      },
      areaServed: [
        'Monterotondo',
        'Mentana',
        'Fonte Nuova',
        'Guidonia',
        'Fiano Romano',
        'Palombara Sabina',
        'Capena',
        'Morlupo',
        'Riano',
        'Roma Nord'
      ]
    }
  },

  nitro: {
    preset: 'node-server',
    output: {
      dir: 'output',
      serverDir: 'output/server',
      publicDir: 'output/public'
    },
    prerender: {
      routes: [
        '/',
        '/implantologia',
        '/ortodonzia',
        '/igiene-dentale',
        '/estetica-dentale',
        '/endodonzia',
        '/odontoiatria-pediatrica',
        '/prenota',
        '/blog',
        '/blog/quanto-costa-dentista-monterotondo',
        '/blog/come-scegliere-dentista-monterotondo',
        '/blog/implantologia-dentale-guida-completa',
        '/blog/ortodonzia-invisibile-adulti',
        '/blog/paura-del-dentista-come-superarla',
        '/blog/igiene-orale-bambini-consigli',
        '/blog/sbiancamento-denti-professionale',
        '/blog/dente-del-giudizio-quando-toglierlo',
        '/faccette-estetiche',
        '/sedazione-cosciente',
        '/riabilitazione-completa',
        '/tecnologie',
        '/blog/faccette-dentali-guida-completa',
        '/blog/sedazione-cosciente-guida',
        '/blog/all-on-4-vs-protesi-mobile',
        '/grazie',
        '/privacy',
        '/cookie-policy'
      ],
      crawlLinks: true
    }
  }
})
