<template>
  <div class="service-page">
    <!-- Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Odontoiatria Pediatrica</span>
        </div>
        <h1>Dentista per Bambini a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Cure dentali dedicate ai piu piccoli in un ambiente accogliente e rassicurante</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Prenota Visita per il Tuo Bambino
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>L'Odontoiatria Dedicata ai Bambini</h2>
            <p>
              L'<strong>odontoiatria pediatrica</strong> (pedodonzia) si occupa della salute orale dei bambini
              dalla nascita all'adolescenza. Nel nostro studio di <strong>Monterotondo</strong> abbiamo creato
              un ambiente a misura di bambino, dove i piccoli pazienti si sentono a loro agio.
            </p>

            <h3>Quando Portare il Bambino dal Dentista?</h3>
            <p>
              La <strong>prima visita odontoiatrica</strong> e consigliata intorno ai 3 anni, o prima se ci
              sono problemi evidenti. Questo permette di:
            </p>
            <ul class="feature-list">
              <li>Abituare il bambino all'ambiente dello studio dentistico</li>
              <li>Verificare il corretto sviluppo della dentatura</li>
              <li>Intercettare precocemente eventuali problemi</li>
              <li>Educare genitori e bambini all'igiene orale</li>
            </ul>

            <h3>I Nostri Servizi per i Bambini</h3>
            <div class="info-cards">
              <div class="info-card">
                <h4>Visite di Controllo</h4>
                <p>Monitoraggio regolare dello sviluppo dentale e della salute orale.</p>
              </div>
              <div class="info-card">
                <h4>Sigillature dei Solchi</h4>
                <p>Protezione dei molari permanenti per prevenire la carie.</p>
              </div>
              <div class="info-card">
                <h4>Fluoroprofilassi</h4>
                <p>Applicazione di fluoro per rinforzare lo smalto dei denti.</p>
              </div>
              <div class="info-card">
                <h4>Ortodonzia Intercettiva</h4>
                <p>Correzione precoce delle malocclusioni durante la crescita.</p>
              </div>
            </div>

            <h3>Prevenzione della Carie nei Bambini</h3>
            <p>
              La <strong>carie</strong> e la malattia piu diffusa nei bambini. Una corretta prevenzione
              permette di evitare problemi e dolore:
            </p>
            <ul class="feature-list">
              <li><strong>Igiene orale quotidiana</strong> - Spazzolamento dopo ogni pasto</li>
              <li><strong>Alimentazione corretta</strong> - Limitare zuccheri e snack dolci</li>
              <li><strong>Sigillature preventive</strong> - Protezione dei solchi dei molari</li>
              <li><strong>Controlli regolari</strong> - Visite ogni 6 mesi</li>
              <li><strong>Fluoroprofilassi</strong> - Rinforzo dello smalto dentale</li>
            </ul>

            <h3>Le Sigillature: Cosa Sono?</h3>
            <p>
              Le <strong>sigillature dei solchi</strong> sono una procedura preventiva indolore che consiste
              nell'applicazione di una resina protettiva nei solchi dei molari permanenti. Questi solchi
              profondi sono difficili da pulire e quindi piu soggetti a carie.
            </p>
            <ul class="feature-list">
              <li>Procedura rapida e indolore</li>
              <li>Nessuna anestesia necessaria</li>
              <li>Protezione efficace contro la carie</li>
              <li>Durata di diversi anni</li>
            </ul>

            <h3>Approccio Delicato e Rassicurante</h3>
            <p>
              Sappiamo che molti bambini hanno paura del dentista. Per questo adottiamo un approccio
              graduale e giocoso:
            </p>
            <ul class="feature-list">
              <li><strong>Tell-Show-Do</strong> - Spieghiamo, mostriamo, poi facciamo</li>
              <li><strong>Ambiente colorato</strong> - Studio accogliente e non intimidatorio</li>
              <li><strong>Tempi adeguati</strong> - Mai fretta, rispettiamo i tempi del bambino</li>
              <li><strong>Premi e sorprese</strong> - Un piccolo regalo dopo la visita</li>
            </ul>

            <h3>Traumi Dentali nei Bambini</h3>
            <p>
              I <strong>traumi dentali</strong> sono frequenti nei bambini, specialmente durante il gioco
              e lo sport. In caso di trauma e importante:
            </p>
            <ul class="feature-list">
              <li>Mantenere la calma</li>
              <li>Se il dente e caduto, conservarlo in latte o soluzione fisiologica</li>
              <li>Contattare immediatamente lo studio</li>
              <li>Portare il bambino dal dentista entro 30-60 minuti</li>
            </ul>
          </div>

          <aside class="sidebar">
            <LeadForm
              variant="card"
              title="Visita per il Tuo Bambino"
              subtitle="Ti ricontatteremo entro 24 ore"
              button-text="Prenota Visita Pediatrica"
              :show-message="false"
              source="/odontoiatria-pediatrica"
              preselected-service="Odontoiatria pediatrica"
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
                <li><NuxtLink to="/ortodonzia">Ortodonzia</NuxtLink></li>
                <li><NuxtLink to="/igiene-dentale">Igiene Dentale</NuxtLink></li>
                <li><NuxtLink to="/implantologia">Implantologia</NuxtLink></li>
                <li><NuxtLink to="/estetica-dentale">Estetica Dentale</NuxtLink></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <h2>Il Sorriso del Tuo Bambino e Importante</h2>
        <p>Prenota una visita di controllo per assicurarti che i suoi denti crescano sani</p>
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
  title: 'Dentista per Bambini Monterotondo | Odontoiatria Pediatrica | Studio Dentistico',
  meta: [
    {
      name: 'description',
      content: 'Dentista per bambini a Monterotondo: odontoiatria pediatrica, sigillature, prevenzione carie. Ambiente accogliente per i piu piccoli. Chiama 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalProcedure',
    name: 'Odontoiatria Pediatrica',
    description: 'Servizio di odontoiatria pediatrica per bambini a Monterotondo',
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
      { name: 'Odontoiatria Pediatrica', item: '/odontoiatria-pediatrica' }
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
