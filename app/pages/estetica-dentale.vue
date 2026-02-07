<template>
  <div class="service-page">
    <!-- Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Estetica Dentale</span>
        </div>
        <h1>Estetica Dentale a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Faccette, sbiancamento e ricostruzioni per un sorriso luminoso e naturale</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Prenota Consulenza Estetica
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>Trasforma il Tuo Sorriso</h2>
            <p>
              L'<strong>odontoiatria estetica</strong> si occupa di migliorare l'aspetto del sorriso attraverso
              trattamenti mirati che combinano estetica e funzionalita. Nel nostro studio di <strong>Monterotondo</strong>
              offriamo soluzioni personalizzate per ogni esigenza.
            </p>

            <h3>Faccette Dentali</h3>
            <p>
              Le <strong>faccette dentali</strong> sono sottili gusci in ceramica o composito che vengono applicati
              sulla superficie anteriore dei denti per correggere difetti estetici.
            </p>
            <ul class="feature-list">
              <li>Correzione di denti scheggiati o fratturati</li>
              <li>Miglioramento del colore di denti macchiati</li>
              <li>Chiusura di spazi tra i denti (diastemi)</li>
              <li>Correzione di denti leggermente storti</li>
              <li>Modifica della forma e dimensione dei denti</li>
            </ul>

            <h3>I Nostri Trattamenti Estetici</h3>
            <div class="info-cards">
              <div class="info-card">
                <h4>Faccette in Ceramica</h4>
                <p>Sottilissime lamine in ceramica integrale per un risultato naturale e duraturo.</p>
              </div>
              <div class="info-card">
                <h4>Faccette in Composito</h4>
                <p>Soluzione piu economica e reversibile, ideale per piccole correzioni.</p>
              </div>
              <div class="info-card">
                <h4>Sbiancamento</h4>
                <p>Trattamento professionale per denti piu bianchi fino a 8 tonalita.</p>
              </div>
              <div class="info-card">
                <h4>Ricostruzioni Estetiche</h4>
                <p>Restauri in composito che imitano perfettamente lo smalto naturale.</p>
              </div>
            </div>

            <h3>Smile Design: Il Sorriso Su Misura</h3>
            <p>
              Lo <strong>Smile Design</strong> e un approccio digitale che permette di progettare il sorriso ideale
              prima di iniziare qualsiasi trattamento. Grazie a software dedicati, potrai vedere in anteprima
              il risultato finale.
            </p>
            <ul class="feature-list">
              <li><strong>Analisi del viso</strong> - Studio delle proporzioni facciali</li>
              <li><strong>Progettazione digitale</strong> - Simulazione del risultato finale</li>
              <li><strong>Mock-up</strong> - Prova estetica provvisoria in bocca</li>
              <li><strong>Realizzazione</strong> - Creazione delle faccette definitive</li>
            </ul>

            <h3>Sbiancamento Professionale</h3>
            <p>
              Il colore dei denti puo essere influenzato da vari fattori: alimentazione, fumo, eta, farmaci.
              Lo sbiancamento professionale permette di recuperare un colore piu chiaro e luminoso.
            </p>
            <ul class="feature-list">
              <li><strong>Sbiancamento in poltrona</strong> - Risultati immediati con luce LED</li>
              <li><strong>Sbiancamento domiciliare</strong> - Mascherine personalizzate da usare a casa</li>
              <li><strong>Risultati duraturi</strong> - Con corretta manutenzione fino a 2-3 anni</li>
            </ul>

            <h3>Ricostruzioni Estetiche</h3>
            <p>
              Le <strong>ricostruzioni in composito</strong> permettono di riparare denti scheggiati, fratturati
              o cariati con materiali che imitano perfettamente l'aspetto naturale dello smalto.
            </p>
            <ul class="feature-list">
              <li>Materiali compositi di ultima generazione</li>
              <li>Stratificazione per un aspetto naturale</li>
              <li>Conservazione massima del dente sano</li>
              <li>Risultati immediati in una sola seduta</li>
            </ul>
          </div>

          <aside class="sidebar">
            <LeadForm
              variant="card"
              title="Consulenza Estetica"
              subtitle="Ti ricontatteremo entro 24 ore"
              button-text="Richiedi Appuntamento"
              :show-message="false"
              source="/estetica-dentale"
              preselected-service="Estetica dentale"
            />
            <div class="sidebar-card">
              <h4>Dove Siamo</h4>
              <p>
                <strong>Via Monte Circeo 12</strong><br>
                00015 Monterotondo (RM)
              </p>
              <p>
                <strong>Orari:</strong><br>
                Lun-Ven: 10:00-19:00
              </p>
            </div>
            <div class="sidebar-card">
              <h4>Altri Servizi</h4>
              <ul class="sidebar-links">
                <li><NuxtLink to="/implantologia">Implantologia</NuxtLink></li>
                <li><NuxtLink to="/ortodonzia">Ortodonzia</NuxtLink></li>
                <li><NuxtLink to="/igiene-dentale">Igiene Dentale</NuxtLink></li>
                <li><NuxtLink to="/endodonzia">Endodonzia</NuxtLink></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <h2>Vuoi un Sorriso Piu Bello?</h2>
        <p>Prenota una consulenza estetica per scoprire le soluzioni adatte a te</p>
        <a href="tel:+390690623936" class="btn btn-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Chiama 06 906 23 936
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Estetica Dentale Monterotondo | Faccette e Sbiancamento | Studio Dentistico',
  meta: [
    {
      name: 'description',
      content: 'Estetica dentale a Monterotondo: faccette dentali, sbiancamento professionale, smile design. Trasforma il tuo sorriso. Prenota consulenza: 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalProcedure',
    name: 'Estetica Dentale',
    description: 'Servizio di odontoiatria estetica con faccette e sbiancamento a Monterotondo',
    procedureType: 'Cosmetic',
    provider: {
      '@type': 'Dentist',
      name: 'Dentista Monterotondo',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Monte Circeo 12',
        addressLocality: 'Monterotondo',
        addressRegion: 'RM',
        postalCode: '00015'
      },
      telephone: '+39 06 906 23 936'
    }
  },
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Servizi', item: '/#servizi' },
      { name: 'Estetica Dentale', item: '/estetica-dentale' }
    ]
  })
])
</script>

<style scoped>
.service-page {
  padding-top: 72px;
}

.service-hero {
  background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg) 100%);
  padding: 60px 0 80px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.breadcrumb a {
  color: var(--text-light);
}

.breadcrumb a:hover {
  color: var(--primary);
}

.service-hero h1 {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.service-hero h1 .highlight {
  color: var(--primary);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,102,204,0.3);
}

.btn-white {
  background: white;
  color: var(--primary);
}

.btn-white:hover {
  background: rgba(255,255,255,0.9);
  transform: translateY(-2px);
}

.btn-block {
  width: 100%;
  justify-content: center;
}

.service-content {
  padding: 60px 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 3rem;
  align-items: start;
}

.main-content h2 {
  font-size: 1.75rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.main-content h3 {
  font-size: 1.35rem;
  color: var(--secondary);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.main-content p {
  color: var(--text-light);
  margin-bottom: 1rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

.feature-list {
  list-style: none;
  margin: 1.5rem 0;
}

.feature-list li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  color: var(--text);
}

.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

.info-card {
  background: var(--bg-light);
  padding: 1.25rem;
  border-radius: var(--radius);
}

.info-card h4 {
  color: var(--secondary);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.info-card p {
  font-size: 0.9rem;
  margin: 0;
}

.sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-card {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: var(--radius);
}

.sidebar-card h4 {
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.sidebar-card p {
  font-size: 0.95rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.sidebar-links {
  list-style: none;
}

.sidebar-links li {
  margin-bottom: 0.5rem;
}

.sidebar-links a {
  color: var(--text);
  font-size: 0.95rem;
}

.sidebar-links a:hover {
  color: var(--primary);
}

.cta-section {
  background: var(--primary);
  padding: 60px 0;
  text-align: center;
}

.cta-section h2 {
  color: white;
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.cta-section p {
  color: rgba(255,255,255,0.9);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .info-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .service-hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style>
