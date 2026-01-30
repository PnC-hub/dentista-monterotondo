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
      title: 'Dentista Monterotondo | Studio Dentistico Via Monte Circeo 12 | Prima Visita Gratuita',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Cerchi un dentista a Monterotondo? Studio dentistico in Via Monte Circeo 12 con tecnologie digitali avanzate. Implantologia, ortodonzia, igiene dentale. Prima visita gratuita. Chiama 06 906 23 936'
        },
        { name: 'keywords', content: 'dentista monterotondo, studio dentistico monterotondo, dentista via monte circeo, implantologia monterotondo, ortodonzia monterotondo, dentista roma nord, dentista mentana, dentista fonte nuova, igiene dentale monterotondo, prima visita gratuita dentista' },
        { property: 'og:title', content: 'Dentista Monterotondo | Studio Dentistico | Prima Visita Gratuita' },
        { property: 'og:description', content: 'Studio dentistico a Monterotondo in Via Monte Circeo 12. Implantologia, ortodonzia, igiene dentale con tecnologie digitali. Prima visita gratuita!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dentistamonterotondo.com' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:image', content: 'https://dentistamonterotondo.com/images/og-image.jpg' },
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
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      script: [
        // Google Tag Manager
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TF4DRS3');`,
          type: 'text/javascript'
        },
        // Google Analytics 4
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-SNEZSXX6HW',
          async: true
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SNEZSXX6HW');`,
          type: 'text/javascript'
        },
        // Facebook Pixel
        {
          innerHTML: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1567637587836934');
          fbq('track', 'PageView');`,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF4DRS3"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          body: true
        },
        {
          innerHTML: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1567637587836934&ev=PageView&noscript=1"/>`,
          body: true
        }
      ]
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
      logo: 'https://dentistamonterotondo.com/images/logo.png',
      image: 'https://dentistamonterotondo.com/images/studio.jpg',
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
      areaServed: [
        'Monterotondo',
        'Mentana',
        'Fonte Nuova',
        'Guidonia',
        'Fiano Romano',
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
        '/grazie'
      ],
      crawlLinks: true
    }
  }
})
