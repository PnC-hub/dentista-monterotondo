<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-content">
      <p>
        Utilizziamo cookie tecnici e, con il tuo consenso, cookie di analisi e marketing.
        <NuxtLink to="/cookie-policy">Maggiori informazioni</NuxtLink>
      </p>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-btn--reject" @click="rejectAll">Rifiuta</button>
        <button class="cookie-btn cookie-btn--accept" @click="acceptAll">Accetta tutti</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showBanner = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie_consent')
  if (!consent) {
    showBanner.value = true
  } else {
    applyConsent(JSON.parse(consent))
  }
})

function acceptAll() {
  const consent = { analytics: true, marketing: true, timestamp: Date.now() }
  localStorage.setItem('cookie_consent', JSON.stringify(consent))
  showBanner.value = false
  applyConsent(consent)
}

function rejectAll() {
  const consent = { analytics: false, marketing: false, timestamp: Date.now() }
  localStorage.setItem('cookie_consent', JSON.stringify(consent))
  showBanner.value = false
}

function applyConsent(consent: { analytics: boolean; marketing: boolean }) {
  if (consent.analytics) {
    loadGTM()
    loadGA4()
  }
  if (consent.marketing) {
    loadFBPixel()
  }
}

function loadGTM() {
  if (document.getElementById('gtm-script')) return
  const s = document.createElement('script')
  s.id = 'gtm-script'
  s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TF4DRS3');`
  document.head.appendChild(s)
}

function loadGA4() {
  if (document.getElementById('ga4-script')) return
  const s1 = document.createElement('script')
  s1.id = 'ga4-script'
  s1.async = true
  s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-SNEZSXX6HW'
  document.head.appendChild(s1)

  const s2 = document.createElement('script')
  s2.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SNEZSXX6HW');`
  document.head.appendChild(s2)
}

function loadFBPixel() {
  if (document.getElementById('fbpixel-script')) return
  const s = document.createElement('script')
  s.id = 'fbpixel-script'
  s.innerHTML = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1567637587836934');
    fbq('track', 'PageView');`
  document.head.appendChild(s)
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.9);
  padding: 1rem 1.5rem;
  z-index: 9999;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.cookie-content p {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.cookie-content a {
  color: #4da3ff;
  text-decoration: underline;
}

.cookie-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.cookie-btn {
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  white-space: nowrap;
}

.cookie-btn--reject {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cookie-btn--reject:hover {
  border-color: rgba(255, 255, 255, 0.6);
  color: white;
}

.cookie-btn--accept {
  background: #0066cc;
  color: white;
}

.cookie-btn--accept:hover {
  background: #004d99;
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    text-align: center;
  }

  .cookie-actions {
    width: 100%;
    justify-content: center;
  }
}
</style>
