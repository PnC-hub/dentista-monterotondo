<template>
  <div class="service-page">
    <!-- Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Endodonzia</span>
        </div>
        <h1>Endodonzia a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Devitalizzazioni e trattamenti canalari con tecniche moderne per salvare i tuoi denti</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Prenota Visita
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>Cos'e l'Endodonzia?</h2>
            <p>
              L'<strong>endodonzia</strong> e la branca dell'odontoiatria che si occupa della diagnosi e del
              trattamento delle patologie della polpa dentale (il "nervo" del dente). Nel nostro studio di
              <strong>Monterotondo</strong> utilizziamo tecniche moderne per salvare denti che altrimenti
              andrebbero estratti.
            </p>

            <h3>Quando e Necessaria una Devitalizzazione?</h3>
            <p>
              La <strong>devitalizzazione</strong> (o trattamento canalare) e necessaria quando la polpa del
              dente e infiammata o infetta a causa di:
            </p>
            <ul class="feature-list">
              <li>Carie profonda che ha raggiunto la polpa</li>
              <li>Traumi dentali (fratture, colpi)</li>
              <li>Denti con ripetuti trattamenti restaurativi</li>
              <li>Ascessi o granulomi all'apice della radice</li>
              <li>Sensibilita prolungata al caldo o al freddo</li>
            </ul>

            <h3>Come Funziona il Trattamento Canalare</h3>
            <p>
              Il trattamento endodontico consiste nella rimozione della polpa malata, nella pulizia e
              sagomatura dei canali radicolari, e nel loro riempimento con materiale biocompatibile.
            </p>
            <ol class="step-list">
              <li>
                <strong>Anestesia Locale</strong>
                <p>Il dente viene completamente anestetizzato per un trattamento indolore.</p>
              </li>
              <li>
                <strong>Accesso alla Polpa</strong>
                <p>Apertura della corona per accedere alla camera pulpare.</p>
              </li>
              <li>
                <strong>Rimozione della Polpa</strong>
                <p>Eliminazione del tessuto pulpare infiammato o necrotico.</p>
              </li>
              <li>
                <strong>Sagomatura dei Canali</strong>
                <p>Pulizia e preparazione dei canali radicolari con strumenti rotanti.</p>
              </li>
              <li>
                <strong>Otturazione dei Canali</strong>
                <p>Riempimento tridimensionale con guttaperca e cemento canalare.</p>
              </li>
              <li>
                <strong>Ricostruzione</strong>
                <p>Restauro del dente con otturazione o corona protesica.</p>
              </li>
            </ol>

            <h3>Le Nostre Tecnologie</h3>
            <div class="info-cards">
              <div class="info-card">
                <h4>Strumenti Rotanti NiTi</h4>
                <p>Strumenti in nichel-titanio per una sagomatura precisa e veloce dei canali.</p>
              </div>
              <div class="info-card">
                <h4>Localizzatore Apicale</h4>
                <p>Dispositivo elettronico per determinare con precisione la lunghezza del canale.</p>
              </div>
              <div class="info-card">
                <h4>Radiografie Digitali</h4>
                <p>Immagini immediate con minima esposizione alle radiazioni.</p>
              </div>
              <div class="info-card">
                <h4>Irrigazione Ultrasonica</h4>
                <p>Disinfezione profonda dei canali con attivazione ultrasonica.</p>
              </div>
            </div>

            <h3>Ritrattamento Endodontico</h3>
            <p>
              In alcuni casi, un dente gia devitalizzato puo richiedere un <strong>ritrattamento</strong>.
              Questo accade quando:
            </p>
            <ul class="feature-list">
              <li>Il trattamento precedente non ha avuto successo</li>
              <li>Si e sviluppata una nuova infezione</li>
              <li>Sono presenti canali non trattati</li>
              <li>La sigillatura dei canali si e deteriorata</li>
            </ul>

            <h3>Perche Salvare il Dente Naturale?</h3>
            <p>
              Salvare il proprio dente naturale e sempre preferibile all'estrazione:
            </p>
            <ul class="feature-list">
              <li><strong>Masticazione efficiente</strong> - Il dente naturale funziona meglio</li>
              <li><strong>Estetica</strong> - Aspetto completamente naturale</li>
              <li><strong>Protezione dell'osso</strong> - Mantiene l'osso alveolare</li>
              <li><strong>Costi inferiori</strong> - Rispetto a estrazione e impianto</li>
            </ul>
          </div>

          <aside class="sidebar">
            <LeadForm
              variant="card"
              title="Hai Mal di Denti?"
              subtitle="Ti ricontatteremo entro 24 ore"
              button-text="Richiedi Visita Urgente"
              :show-message="false"
              source="/endodonzia"
              preselected-service="Endodonzia"
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
        <h2>Dolore ai Denti? Non Aspettare</h2>
        <p>Contattaci subito per una visita e salva il tuo dente naturale</p>
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
  title: 'Endodonzia Monterotondo | Devitalizzazione e Cura Canalare | Studio Dentistico',
  meta: [
    {
      name: 'description',
      content: 'Endodonzia a Monterotondo: devitalizzazioni, trattamenti canalari e ritrattamenti con tecniche moderne. Salva i tuoi denti naturali. Chiama 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalProcedure',
    name: 'Endodonzia',
    description: 'Servizio di endodonzia, devitalizzazioni e trattamenti canalari a Monterotondo',
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
  }
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
