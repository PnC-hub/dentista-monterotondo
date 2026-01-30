<template>
  <div class="service-page">
    <!-- Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Implantologia</span>
        </div>
        <h1>Implantologia a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Impianti dentali con tecnologia computer-guidata per risultati precisi e duraturi</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Prenota Consulenza Gratuita
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>Cos'e l'Implantologia Dentale?</h2>
            <p>
              L'<strong>implantologia dentale</strong> e la branca dell'odontoiatria che si occupa della sostituzione
              dei denti mancanti attraverso l'inserimento di impianti in titanio nell'osso mascellare o mandibolare.
              Nel nostro studio di <strong>Monterotondo</strong> utilizziamo le tecniche piu avanzate per garantire
              risultati estetici e funzionali ottimali.
            </p>

            <h3>Implantologia Computer-Guidata</h3>
            <p>
              Grazie alla <strong>TAC Cone Beam 3D</strong> presente nel nostro studio, siamo in grado di pianificare
              ogni intervento con estrema precisione. La chirurgia guidata consente di:
            </p>
            <ul class="feature-list">
              <li>Posizionare gli impianti con accuratezza millimetrica</li>
              <li>Ridurre i tempi dell'intervento</li>
              <li>Minimizzare il disagio post-operatorio</li>
              <li>Ottenere risultati predicibili e duraturi</li>
            </ul>

            <h3>Tipologie di Impianti</h3>
            <p>Offriamo diverse soluzioni implantari per rispondere a ogni esigenza:</p>
            <div class="info-cards">
              <div class="info-card">
                <h4>Impianto Singolo</h4>
                <p>Sostituzione di un singolo dente mancante con corona su impianto.</p>
              </div>
              <div class="info-card">
                <h4>Ponte su Impianti</h4>
                <p>Sostituzione di piu denti adiacenti con un ponte supportato da impianti.</p>
              </div>
              <div class="info-card">
                <h4>All-on-4 / All-on-6</h4>
                <p>Riabilitazione completa dell'arcata con soli 4 o 6 impianti.</p>
              </div>
              <div class="info-card">
                <h4>Carico Immediato</h4>
                <p>Denti fissi provvisori nella stessa seduta dell'intervento.</p>
              </div>
            </div>

            <h3>Perche Scegliere il Nostro Studio per l'Implantologia?</h3>
            <ul class="feature-list">
              <li><strong>Tecnologia 3D in sede</strong> - TAC Cone Beam per diagnosi e pianificazione precise</li>
              <li><strong>Chirurgia guidata</strong> - Interventi mini-invasivi e predicibili</li>
              <li><strong>Materiali certificati</strong> - Utilizziamo solo impianti di marche leader</li>
              <li><strong>Esperienza</strong> - Team specializzato con anni di esperienza</li>
              <li><strong>Garanzia</strong> - Tutti i nostri lavori sono garantiti</li>
            </ul>

            <h3>Il Percorso Implantare</h3>
            <ol class="step-list">
              <li>
                <strong>Prima Visita Gratuita</strong>
                <p>Valutazione clinica e radiografica per stabilire l'idoneita all'implantologia.</p>
              </li>
              <li>
                <strong>Pianificazione 3D</strong>
                <p>TAC e progettazione digitale dell'intervento con software dedicati.</p>
              </li>
              <li>
                <strong>Intervento Chirurgico</strong>
                <p>Inserimento degli impianti con tecnica guidata, in anestesia locale.</p>
              </li>
              <li>
                <strong>Guarigione</strong>
                <p>Periodo di osteointegrazione (2-4 mesi) per la stabilizzazione degli impianti.</p>
              </li>
              <li>
                <strong>Protesi Definitiva</strong>
                <p>Realizzazione e applicazione delle corone o protesi definitive.</p>
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
              source="/implantologia"
              preselected-service="Implantologia"
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
        <h2>Hai Bisogno di un Impianto Dentale?</h2>
        <p>Prenota una consulenza gratuita per valutare la soluzione migliore per te</p>
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
  title: 'Implantologia Monterotondo | Impianti Dentali Computer-Guidati | Studio Dentistico',
  meta: [
    {
      name: 'description',
      content: 'Implantologia a Monterotondo con tecnologia computer-guidata e TAC 3D. Impianti dentali di qualita, carico immediato, All-on-4. Prima consulenza gratuita. Chiama 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalProcedure',
    name: 'Implantologia Dentale',
    description: 'Servizio di implantologia dentale con tecnologia computer-guidata a Monterotondo',
    procedureType: 'Surgical',
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
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto costa un impianto dentale a Monterotondo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il costo di un impianto dentale varia in base alla complessita del caso. Offriamo una consulenza gratuita per valutare la situazione e fornire un preventivo personalizzato.'
        }
      },
      {
        '@type': 'Question',
        name: 'L\'intervento di implantologia e doloroso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'intervento viene eseguito in anestesia locale ed e generalmente indolore. Il nostro protocollo prevede anche una gestione ottimale del post-operatorio.'
        }
      }
    ]
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
