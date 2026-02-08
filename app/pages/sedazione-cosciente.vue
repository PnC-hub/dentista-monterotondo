<template>
  <div class="service-page">
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Sedazione Cosciente</span>
        </div>
        <h1>Sedazione Cosciente a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Trattamenti dentali senza ansia e senza dolore. Il comfort che meriti per ogni tipo di intervento.</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Prenota con Sedazione
          </a>
        </div>
      </div>
    </section>

    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>Cure Dentali Senza Paura</h2>
            <p>
              La <strong>sedazione cosciente</strong> e una tecnica anestesiologica sicura che permette di affrontare
              qualsiasi trattamento odontoiatrico in uno stato di profondo rilassamento. Il paziente rimane
              cosciente e collaborante, ma completamente privo di ansia e percezione del dolore.
            </p>
            <p>
              Il nostro studio di <strong>Monterotondo</strong> offre la sedazione cosciente come servizio
              dedicato ai pazienti con <strong>odontofobia</strong>, ansia da poltrona o che devono affrontare interventi lunghi
              e complessi come l'implantologia a carico immediato.
            </p>

            <h3>A Chi e Consigliata</h3>
            <ul class="feature-list">
              <li><strong>Pazienti con fobia del dentista</strong> — odontofobia, attacchi di panico, ansia severa</li>
              <li><strong>Interventi lunghi</strong> — implantologia, riabilitazioni complete, estrazioni multiple</li>
              <li><strong>Riflesso del vomito accentuato</strong> — rende confortevoli anche le procedure piu invasive</li>
              <li><strong>Bambini e adolescenti</strong> — per garantire collaborazione e assenza di traumi</li>
              <li><strong>Pazienti con patologie cardiovascolari</strong> — riduce lo stress e mantiene stabili i parametri vitali</li>
              <li><strong>Chi desidera il massimo comfort</strong> — per vivere ogni trattamento serenamente</li>
            </ul>

            <h3>Come Funziona</h3>
            <div class="info-cards">
              <div class="info-card">
                <h4>1. Valutazione Pre-Sedazione</h4>
                <p>Raccolta dell'anamnesi, verifica delle condizioni di salute e pianificazione del tipo di sedazione adatta.</p>
              </div>
              <div class="info-card">
                <h4>2. Sedazione Inalatoria</h4>
                <p>Somministrazione di una miscela di protossido d'azoto e ossigeno tramite mascherina nasale. Effetto in 2-3 minuti.</p>
              </div>
              <div class="info-card">
                <h4>3. Trattamento in Comfort</h4>
                <p>Intervento eseguito con il paziente rilassato, cosciente ma in assenza di ansia e percezione del dolore.</p>
              </div>
              <div class="info-card">
                <h4>4. Risveglio Immediato</h4>
                <p>Recupero completo in 5 minuti. Nessun effetto residuo: il paziente puo guidare e tornare alle normali attivita.</p>
              </div>
            </div>

            <h3>Tipologie di Sedazione</h3>
            <ul class="feature-list">
              <li><strong>Sedazione inalatoria (protossido d'azoto)</strong> — La piu comune, sicura e maneggevole. Effetto modulabile in tempo reale. Indicata per la maggior parte dei casi.</li>
              <li><strong>Sedazione endovenosa</strong> — Per interventi piu complessi o pazienti con ansia severa. Eseguita con la supervisione di un anestesista.</li>
            </ul>

            <h3>Sicurezza e Monitoraggio</h3>
            <p>
              Durante tutta la seduta, i <strong>parametri vitali</strong> (frequenza cardiaca, saturazione di ossigeno,
              pressione arteriosa) vengono costantemente monitorati. La sedazione cosciente e una tecnica
              con un <strong>profilo di sicurezza elevato</strong>, utilizzata quotidianamente in ambito odontoiatrico
              e pediatrico.
            </p>

            <h3>Domande Frequenti</h3>
            <ul class="feature-list">
              <li><strong>E pericolosa?</strong> — No, e una delle tecniche anestesiologiche piu sicure. Il protossido d'azoto e usato da oltre 150 anni in odontoiatria.</li>
              <li><strong>Restera cosciente?</strong> — Si, il paziente e vigile e puo comunicare. Semplicemente non avverte ansia ne dolore.</li>
              <li><strong>Posso guidare dopo?</strong> — Si, con la sedazione inalatoria il recupero e completo in pochi minuti.</li>
              <li><strong>Quanto costa in piu?</strong> — La sedazione ha un costo aggiuntivo contenuto rispetto al trattamento standard. Chiedi in sede di consulenza.</li>
            </ul>
          </div>

          <aside class="sidebar">
            <LeadForm
              variant="card"
              title="Prenota con Sedazione"
              subtitle="Cure senza ansia e senza dolore"
              button-text="Richiedi Appuntamento"
              :show-message="true"
              source="/sedazione-cosciente"
              preselected-service="Sedazione cosciente"
            />
            <div class="sidebar-card">
              <h4>Dove Siamo</h4>
              <p><strong>Via Monte Circeo 12</strong><br>00015 Monterotondo (RM)</p>
              <p><strong>Orari:</strong><br>Lun-Ven: 10:00-19:00</p>
            </div>
            <div class="sidebar-card">
              <h4>Trattamenti con Sedazione</h4>
              <ul class="sidebar-links">
                <li><NuxtLink to="/implantologia">Implantologia</NuxtLink></li>
                <li><NuxtLink to="/riabilitazione-completa">Riabilitazione Completa</NuxtLink></li>
                <li><NuxtLink to="/faccette-estetiche">Faccette Estetiche</NuxtLink></li>
                <li><NuxtLink to="/endodonzia">Endodonzia</NuxtLink></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Hai Paura del Dentista?</h2>
        <p>La sedazione cosciente ti permette di affrontare ogni trattamento con serenita</p>
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
  title: 'Sedazione Cosciente Monterotondo | Dentista Senza Dolore | Studio Dentistico',
  meta: [
    { name: 'description', content: 'Sedazione cosciente a Monterotondo: cure dentali senza ansia e senza dolore. Protossido d\'azoto per odontofobia, interventi complessi, bambini. Tel: 06 906 23 936' }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalProcedure',
    name: 'Sedazione Cosciente',
    description: 'Sedazione cosciente con protossido d\'azoto per trattamenti dentali senza ansia a Monterotondo',
    procedureType: 'Therapeutic',
    provider: {
      '@type': 'Dentist',
      name: 'Dentista Monterotondo',
      address: { '@type': 'PostalAddress', streetAddress: 'Via Monte Circeo 12', addressLocality: 'Monterotondo', addressRegion: 'RM', postalCode: '00015' },
      telephone: '+39 06 906 23 936'
    }
  },
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Servizi', item: '/#servizi' },
      { name: 'Sedazione Cosciente', item: '/sedazione-cosciente' }
    ]
  })
])
</script>

<style scoped>
.service-page { padding-top: 72px; }
.service-hero { background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg) 100%); padding: 60px 0 80px; }
.breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.5rem; }
.breadcrumb a { color: var(--text-light); } .breadcrumb a:hover { color: var(--primary); }
.service-hero h1 { font-size: 2.75rem; font-weight: 700; color: var(--secondary); margin-bottom: 1rem; }
.service-hero h1 .highlight { color: var(--primary); }
.hero-subtitle { font-size: 1.25rem; color: var(--text-light); margin-bottom: 2rem; max-width: 600px; }
.hero-cta { display: flex; gap: 1rem; }
.btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.9rem 1.75rem; border-radius: 8px; font-weight: 600; font-size: 1rem; transition: all 0.2s; text-decoration: none; border: none; cursor: pointer; }
.btn-primary { background: var(--primary); color: white; } .btn-primary:hover { background: var(--primary-dark); color: white; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,102,204,0.3); }
.btn-white { background: white; color: var(--primary); } .btn-white:hover { background: rgba(255,255,255,0.9); transform: translateY(-2px); }
.service-content { padding: 60px 0; }
.content-grid { display: grid; grid-template-columns: 1fr 340px; gap: 3rem; align-items: start; }
.main-content h2 { font-size: 1.75rem; color: var(--secondary); margin-bottom: 1rem; }
.main-content h3 { font-size: 1.35rem; color: var(--secondary); margin-top: 2.5rem; margin-bottom: 1rem; }
.main-content p { color: var(--text-light); margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.8; }
.feature-list { list-style: none; margin: 1.5rem 0; }
.feature-list li { position: relative; padding-left: 1.75rem; margin-bottom: 0.75rem; color: var(--text); }
.feature-list li::before { content: ''; position: absolute; left: 0; top: 0.5rem; width: 8px; height: 8px; background: var(--primary); border-radius: 50%; }
.info-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0; }
.info-card { background: var(--bg-light); padding: 1.25rem; border-radius: var(--radius); }
.info-card h4 { color: var(--secondary); margin-bottom: 0.5rem; font-size: 1rem; } .info-card p { font-size: 0.9rem; margin: 0; }
.sidebar { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 1.5rem; }
.sidebar-card { background: var(--bg-light); padding: 1.5rem; border-radius: var(--radius); }
.sidebar-card h4 { color: var(--secondary); margin-bottom: 0.75rem; }
.sidebar-card p { font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem; }
.sidebar-links { list-style: none; } .sidebar-links li { margin-bottom: 0.5rem; }
.sidebar-links a { color: var(--text); font-size: 0.95rem; } .sidebar-links a:hover { color: var(--primary); }
.cta-section { background: var(--primary); padding: 60px 0; text-align: center; }
.cta-section h2 { color: white; font-size: 2rem; margin-bottom: 0.75rem; }
.cta-section p { color: rgba(255,255,255,0.9); font-size: 1.1rem; margin-bottom: 1.5rem; }
@media (max-width: 992px) { .content-grid { grid-template-columns: 1fr; } .sidebar { position: static; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); } .info-cards { grid-template-columns: 1fr; } }
@media (max-width: 768px) { .service-hero h1 { font-size: 2rem; } .hero-subtitle { font-size: 1.1rem; } }
</style>
