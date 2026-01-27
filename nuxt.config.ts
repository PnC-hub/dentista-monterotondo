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
    name: 'Dentista Monterotondo - Smiledoc Clinica Dentale',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Dentista Monterotondo | Smiledoc Clinica Dentale | Implantologia e Ortodonzia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Cerchi un dentista a Monterotondo? Smiledoc: clinica dentale con tecnologie digitali avanzate. Implantologia computer-guidata, ortodonzia, igiene dentale. Prima visita gratuita. Tel: 06 906 23 936'
        },
        { name: 'keywords', content: 'dentista monterotondo, clinica dentale monterotondo, implantologia monterotondo, ortodonzia monterotondo, dentista roma nord, smiledoc monterotondo, igiene dentale monterotondo' },
        { property: 'og:title', content: 'Dentista Monterotondo | Smiledoc Clinica Dentale' },
        { property: 'og:description', content: 'Clinica dentale a Monterotondo con tecnologie digitali. Implantologia, ortodonzia, igiene dentale. Prima visita gratuita!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dentistamonterotondo.com' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:image', content: 'https://dentistamonterotondo.com/images/og-image.jpg' },
        { name: 'geo.region', content: 'IT-RM' },
        { name: 'geo.placename', content: 'Monterotondo' },
        { name: 'geo.position', content: '42.0533;12.6186' },
        { name: 'ICBM', content: '42.0533, 12.6186' },
      ],
      link: [
        { rel: 'canonical', href: 'https://dentistamonterotondo.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      script: [
        // Google Tag Manager - Same as smiledoc.it (GTM-TF4DRS3)
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TF4DRS3');`,
          type: 'text/javascript'
        },
        // Google Analytics 4 - Same as smiledoc.it (G-SNEZSXX6HW)
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
        // Facebook Pixel - Same as smiledoc.it (1567637587836934)
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
  },

  robots: {
    sitemap: '/sitemap.xml',
  },

  schemaOrg: {
    identity: {
      type: 'Dentist',
      name: 'Smiledoc Clinica Dentale Monterotondo',
      url: 'https://dentistamonterotondo.com',
      logo: 'https://dentistamonterotondo.com/images/logo.png',
      image: 'https://dentistamonterotondo.com/images/clinica.jpg',
      telephone: '+39 06 906 23 936',
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
        { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' }
      ],
      priceRange: '€€',
      sameAs: [
        'https://www.facebook.com/smiledoc.it',
        'https://www.instagram.com/smiledoc_monterotondo',
        'https://www.smiledoc.it'
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
