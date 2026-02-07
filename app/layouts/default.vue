<template>
  <div class="site">
    <!-- Header -->
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <NuxtLink to="/">
            <span class="logo-text">Dentista Monterotondo</span>
          </NuxtLink>
        </div>
        <nav class="nav" :class="{ 'nav-open': menuOpen }">
          <NuxtLink to="/#servizi" @click="menuOpen = false">Servizi</NuxtLink>
          <NuxtLink to="/#perche-noi" @click="menuOpen = false">Chi Siamo</NuxtLink>
          <NuxtLink to="/blog" @click="menuOpen = false">Blog</NuxtLink>
          <NuxtLink to="/#contatti" @click="menuOpen = false">Contatti</NuxtLink>
        </nav>
        <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="tel:+390690623936" class="header-cta">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Chiama Ora
        </a>
      </div>
    </header>

    <!-- Cookie Banner -->
    <CookieBanner />

    <!-- Lead Generation Components -->
    <ExitPopup />
    <StickyCta />
    <WhatsAppButton />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-logo">Dentista Monterotondo</div>
            <p>Studio dentistico in Via Monte Circeo 12, Monterotondo. Servizi odontoiatrici di qualita per tutta la famiglia.</p>
            <div class="footer-contact">
              <a href="tel:+390690623936">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                06 906 23 936
              </a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Servizi</h4>
            <ul>
              <li><NuxtLink to="/implantologia">Implantologia</NuxtLink></li>
              <li><NuxtLink to="/ortodonzia">Ortodonzia</NuxtLink></li>
              <li><NuxtLink to="/igiene-dentale">Igiene Dentale</NuxtLink></li>
              <li><NuxtLink to="/estetica-dentale">Estetica Dentale</NuxtLink></li>
              <li><NuxtLink to="/endodonzia">Endodonzia</NuxtLink></li>
              <li><NuxtLink to="/odontoiatria-pediatrica">Pediatrica</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Approfondimenti</h4>
            <ul>
              <li><NuxtLink to="/blog">Blog</NuxtLink></li>
              <li><NuxtLink to="/blog/come-scegliere-dentista-monterotondo">Scegliere il Dentista</NuxtLink></li>
              <li><NuxtLink to="/blog/quanto-costa-dentista-monterotondo">Costi Dentista</NuxtLink></li>
              <li><NuxtLink to="/blog/paura-del-dentista-come-superarla">Paura del Dentista</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Dove Siamo</h4>
            <ul>
              <li>Via Monte Circeo 12</li>
              <li>00015 Monterotondo (RM)</li>
              <li>Lun-Ven: 10:00-19:00</li>
              <li class="footer-zones">Monterotondo, Mentana, Fonte Nuova, Guidonia, Roma Nord</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-legal">
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
            <span>|</span>
            <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
            <span>|</span>
            <a href="#" @click.prevent="resetCookieConsent">Gestisci Cookie</a>
          </div>
          <p>Direttore Sanitario: Dott. Piernatale Civero</p>
          <p>Smiledoc S.r.l. - P.IVA 15131801001 - Via Monte Circeo 12, 00015 Monterotondo (RM)</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

function resetCookieConsent() {
  localStorage.removeItem('cookie_consent')
  window.location.reload()
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --primary: #0066cc;
  --primary-light: #e6f0fa;
  --primary-dark: #004d99;
  --secondary: #1a1a2e;
  --text: #333;
  --text-light: #666;
  --text-muted: #999;
  --bg: #fff;
  --bg-light: #f7f9fc;
  --bg-dark: #0f0f1a;
  --border: #e5e7eb;
  --shadow: 0 4px 20px rgba(0,0,0,0.08);
  --radius: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--primary-dark);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid var(--border);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo a {
  text-decoration: none;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--secondary);
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav a {
  color: var(--text);
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav a:hover {
  color: var(--primary);
}

.header-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary);
  color: white !important;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s, transform 0.2s;
}

.header-cta:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: 0.3s;
}

/* Footer */
.footer {
  background: var(--bg-dark);
  color: rgba(255,255,255,0.7);
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.footer-main > p {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.footer-contact a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
}

.footer-links h4 {
  color: white;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: rgba(255,255,255,0.6);
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-legal {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
}

.footer-legal a {
  color: rgba(255,255,255,0.6);
}

.footer-legal a:hover {
  color: var(--primary);
}

.footer-legal span {
  color: rgba(255,255,255,0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 3rem;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
}

/* Responsive */
@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: var(--shadow);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .menu-toggle {
    display: flex;
  }

  .header-cta {
    display: none;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
