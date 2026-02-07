<template>
  <div class="service-page">
    <!-- Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Ortodonzia</span>
        </div>
        <h1>Ortodonzia a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Allineamento dentale per adulti e bambini con apparecchi tradizionali e allineatori invisibili</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Prenota una Consulenza
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>Ortodonzia: Denti Dritti a Ogni Eta</h2>
            <p>
              L'<strong>ortodonzia</strong> e la specialita odontoiatrica che si occupa della diagnosi, prevenzione
              e trattamento delle malocclusioni dentali. Nel nostro studio di <strong>Monterotondo</strong> offriamo
              soluzioni ortodontiche per pazienti di tutte le eta, dai bambini agli adulti.
            </p>

            <h3>Allineatori Trasparenti</h3>
            <p>
              Gli <strong>allineatori invisibili</strong> rappresentano la soluzione piu discreta ed estetica per
              allineare i denti. Si tratta di mascherine trasparenti rimovibili che spostano gradualmente i denti
              nella posizione desiderata.
            </p>
            <ul class="feature-list">
              <li>Praticamente invisibili quando indossati</li>
              <li>Rimovibili per mangiare e per l'igiene orale</li>
              <li>Confortevoli e senza fili metallici</li>
              <li>Pianificazione digitale del risultato finale</li>
            </ul>

            <h3>Apparecchi Ortodontici</h3>
            <p>Offriamo diverse tipologie di apparecchi per rispondere a ogni esigenza:</p>
            <div class="info-cards">
              <div class="info-card">
                <h4>Apparecchio Fisso</h4>
                <p>Brackets metallici o estetici per casi complessi che richiedono controllo preciso.</p>
              </div>
              <div class="info-card">
                <h4>Allineatori Invisibili</h4>
                <p>Mascherine trasparenti rimovibili per un trattamento discreto e confortevole.</p>
              </div>
              <div class="info-card">
                <h4>Apparecchio Linguale</h4>
                <p>Brackets posizionati sulla superficie interna dei denti, completamente invisibili.</p>
              </div>
              <div class="info-card">
                <h4>Apparecchio Mobile</h4>
                <p>Ideale per bambini in fase di crescita e per mantenimento post-trattamento.</p>
              </div>
            </div>

            <h3>Ortodonzia Pediatrica</h3>
            <p>
              L'<strong>ortodonzia nei bambini</strong> e fondamentale per intercettare precocemente le malocclusioni
              e guidare la crescita delle ossa mascellari. Raccomandiamo una prima visita ortodontica intorno ai 6-7 anni.
            </p>
            <ul class="feature-list">
              <li><strong>Ortodonzia intercettiva</strong> - Correzione precoce durante la crescita</li>
              <li><strong>Espansori palatali</strong> - Per palati stretti e affollamento dentale</li>
              <li><strong>Apparecchi funzionali</strong> - Per guidare lo sviluppo delle ossa</li>
              <li><strong>Mantenitori di spazio</strong> - Per preservare lo spazio per i denti permanenti</li>
            </ul>

            <h3>Ortodonzia per Adulti</h3>
            <p>
              Non e mai troppo tardi per avere un sorriso allineato. L'ortodonzia per adulti e sempre piu richiesta
              grazie alle soluzioni estetiche disponibili oggi.
            </p>
            <ul class="feature-list">
              <li>Allineatori trasparenti per un trattamento discreto</li>
              <li>Brackets in ceramica per un aspetto naturale</li>
              <li>Trattamenti combinati con altre specialita</li>
              <li>Piani di pagamento personalizzati</li>
            </ul>

            <h3>Il Percorso Ortodontico</h3>
            <ol class="step-list">
              <li>
                <strong>Prima Visita</strong>
                <p>Valutazione clinica, fotografica e radiografica per diagnosi precisa.</p>
              </li>
              <li>
                <strong>Piano di Trattamento</strong>
                <p>Presentazione delle opzioni terapeutiche e scelta della soluzione più adatta.</p>
              </li>
              <li>
                <strong>Fase Attiva</strong>
                <p>Applicazione dell'apparecchio e controlli periodici per monitorare i progressi.</p>
              </li>
              <li>
                <strong>Contenzione</strong>
                <p>Fase di mantenimento per stabilizzare i risultati ottenuti nel tempo.</p>
              </li>
            </ol>
          </div>

          <aside class="sidebar">
            <LeadForm
              variant="card"
              title="Richiedi Informazioni"
              subtitle="Ti ricontatteremo entro 24 ore"
              button-text="Richiedi Appuntamento"
              :show-message="false"
              source="/ortodonzia"
              preselected-service="Ortodonzia"
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
                <li><NuxtLink to="/igiene-dentale">Igiene Dentale</NuxtLink></li>
                <li><NuxtLink to="/estetica-dentale">Estetica Dentale</NuxtLink></li>
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
        <h2>Vuoi un Sorriso Perfettamente Allineato?</h2>
        <p>Prenota una consulenza per scoprire la soluzione ortodontica adatta a te</p>
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
  title: 'Ortodonzia Monterotondo | Allineatori Invisibili e Apparecchi | Studio Dentistico',
  meta: [
    {
      name: 'description',
      content: 'Ortodonzia a Monterotondo per adulti e bambini. Allineatori invisibili, apparecchi estetici, ortodonzia pediatrica. Chiama 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalProcedure',
    name: 'Ortodonzia',
    description: 'Servizio di ortodonzia con allineatori invisibili e apparecchi a Monterotondo',
    procedureType: 'Therapeutic',
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
      { name: 'Ortodonzia', item: '/ortodonzia' }
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

.step-list {
  list-style: none;
  counter-reset: step;
  margin: 1.5rem 0;
}

.step-list li {
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 1.5rem;
  counter-increment: step;
}

.step-list li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--primary-light);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.step-list li strong {
  display: block;
  color: var(--secondary);
  margin-bottom: 0.25rem;
}

.step-list li p {
  margin: 0;
  font-size: 0.95rem;
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
