<template>
  <div class="service-page">
    <!-- Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Igiene Dentale</span>
        </div>
        <h1>Igiene Dentale a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Pulizia professionale, sbiancamento e prevenzione per un sorriso sano e luminoso</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Prenota Pulizia Dentale
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>L'Importanza dell'Igiene Orale Professionale</h2>
            <p>
              L'<strong>igiene dentale professionale</strong> e fondamentale per mantenere denti e gengive in salute.
              Nel nostro studio di <strong>Monterotondo</strong>, i nostri igienisti dentali utilizzano tecniche
              e strumenti all'avanguardia per una pulizia profonda e delicata.
            </p>

            <h3>Pulizia Dentale Professionale</h3>
            <p>
              La <strong>detartrasi</strong>, comunemente chiamata "pulizia dei denti", consiste nella rimozione
              di placca batterica e tartaro che si accumulano sulle superfici dentali e sotto il bordo gengivale.
            </p>
            <ul class="feature-list">
              <li>Rimozione del tartaro sopra e sotto-gengivale</li>
              <li>Eliminazione delle macchie superficiali</li>
              <li>Lucidatura delle superfici dentali</li>
              <li>Applicazione di fluoro protettivo</li>
            </ul>

            <h3>I Nostri Trattamenti di Igiene</h3>
            <div class="info-cards">
              <div class="info-card">
                <h4>Detartrasi</h4>
                <p>Rimozione professionale di placca e tartaro con ultrasuoni e strumenti manuali.</p>
              </div>
              <div class="info-card">
                <h4>Air-Flow</h4>
                <p>Pulizia delicata con getto di aria, acqua e bicarbonato per rimuovere macchie.</p>
              </div>
              <div class="info-card">
                <h4>Sbiancamento</h4>
                <p>Trattamento professionale per denti piu bianchi e luminosi.</p>
              </div>
              <div class="info-card">
                <h4>Sigillature</h4>
                <p>Protezione dei solchi dentali per prevenire la carie nei bambini.</p>
              </div>
            </div>

            <h3>Sbiancamento Dentale Professionale</h3>
            <p>
              Lo <strong>sbiancamento dei denti</strong> professionale permette di ottenere un sorriso piu bianco
              e luminoso in modo sicuro ed efficace. Offriamo diverse opzioni:
            </p>
            <ul class="feature-list">
              <li><strong>Sbiancamento in studio</strong> - Risultati immediati in una seduta</li>
              <li><strong>Sbiancamento domiciliare</strong> - Con mascherine personalizzate</li>
              <li><strong>Trattamenti combinati</strong> - Per risultati ottimali e duraturi</li>
            </ul>

            <h3>Prevenzione: La Chiave per un Sorriso Sano</h3>
            <p>
              La prevenzione è il modo più efficace per evitare problemi dentali più seri e costosi.
              Raccomandiamo una seduta di igiene professionale ogni 6 mesi.
            </p>
            <ul class="feature-list">
              <li>Controlli periodici per diagnosi precoce</li>
              <li>Istruzioni personalizzate per l'igiene domiciliare</li>
              <li>Consigli alimentari per la salute orale</li>
              <li>Monitoraggio dello stato di salute delle gengive</li>
            </ul>

            <h3>Ogni Quanto Fare la Pulizia dei Denti?</h3>
            <p>
              La frequenza ideale della pulizia professionale dipende dalle condizioni individuali:
            </p>
            <ul class="feature-list">
              <li><strong>Ogni 6 mesi</strong> - Per la maggior parte delle persone</li>
              <li><strong>Ogni 3-4 mesi</strong> - Per chi soffre di problemi gengivali</li>
              <li><strong>Ogni 4 mesi</strong> - Per fumatori e consumatori di caffe/te</li>
              <li><strong>Ogni 3 mesi</strong> - Per pazienti con impianti o protesi</li>
            </ul>
          </div>

          <aside class="sidebar">
            <LeadForm
              variant="card"
              title="Prenota Igiene Dentale"
              subtitle="Ti ricontatteremo entro 24 ore"
              button-text="Richiedi Appuntamento"
              :show-message="false"
              source="/igiene-dentale"
              preselected-service="Igiene dentale"
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
        <h2>E' Ora della Tua Pulizia Dentale?</h2>
        <p>Prenota una seduta di igiene professionale per un sorriso sano e splendente</p>
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
  title: 'Igiene Dentale Monterotondo | Pulizia Denti e Sbiancamento | Studio Dentistico',
  meta: [
    {
      name: 'description',
      content: 'Igiene dentale professionale a Monterotondo. Pulizia dei denti, sbiancamento, detartrasi e prevenzione. Igienisti qualificati. Prenota ora: 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalProcedure',
    name: 'Igiene Dentale Professionale',
    description: 'Servizio di igiene dentale, pulizia e sbiancamento a Monterotondo',
    procedureType: 'Preventive',
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
      { name: 'Igiene Dentale', item: '/igiene-dentale' }
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
