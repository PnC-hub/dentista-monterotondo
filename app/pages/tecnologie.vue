<template>
  <div class="service-page">
    <section class="service-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Tecnologie Avanzate</span>
        </div>
        <h1>Tecnologie Avanzate nel Nostro Studio di <span class="highlight">Monterotondo</span></h1>
        <p class="hero-subtitle">Strumentazione di ultima generazione per diagnosi precise, interventi minimamente invasivi e risultati prevedibili.</p>
        <div class="hero-cta">
          <a href="tel:+390690623936" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Scopri il Nostro Studio
          </a>
        </div>
      </div>
    </section>

    <section class="service-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <h2>Odontoiatria Digitale e Innovazione</h2>
            <p>
              Il nostro studio di <strong>Monterotondo</strong> investe costantemente nelle tecnologie piu avanzate
              per garantire <strong>diagnosi accurate</strong>, <strong>trattamenti minimamente invasivi</strong>
              e <strong>risultati predicibili</strong>. Ogni strumentazione viene selezionata per offrire
              il massimo beneficio al paziente in termini di comfort, sicurezza e precisione.
            </p>

            <h3>TAC Cone Beam 3D (CBCT)</h3>
            <p>
              La <strong>Tomografia Computerizzata Cone Beam</strong> fornisce immagini tridimensionali delle strutture
              ossee e dentali con una dose di radiazioni fino a <strong>10 volte inferiore</strong> rispetto alla TAC tradizionale.
            </p>
            <ul class="feature-list">
              <li><strong>Diagnosi implantologica</strong> — valutazione precisa di quantita e qualita dell'osso</li>
              <li><strong>Chirurgia guidata</strong> — pianificazione 3D degli interventi implantari</li>
              <li><strong>Endodonzia complessa</strong> — visualizzazione dei canali radicolari</li>
              <li><strong>Ortodonzia</strong> — analisi cefalometrica tridimensionale</li>
            </ul>

            <h3>Scanner Intraorale 3D</h3>
            <p>
              Lo <strong>scanner intraorale</strong> sostituisce le impronte tradizionali con pasta, eliminando
              il disagio per il paziente. In pochi minuti si ottiene un modello digitale 3D della bocca
              con precisione submillimetrica.
            </p>
            <ul class="feature-list">
              <li><strong>Zero disagio</strong> — niente piu paste per impronta</li>
              <li><strong>Precisione superiore</strong> — impronta digitale submillimetrica</li>
              <li><strong>Tempi ridotti</strong> — impronta completa in 3-5 minuti</li>
              <li><strong>Comunicazione col laboratorio</strong> — invio digitale immediato</li>
            </ul>

            <h3>Le Nostre Tecnologie</h3>
            <div class="info-cards">
              <div class="info-card">
                <h4>Laser Odontoiatrico</h4>
                <p>Trattamenti parodontali, chirurgici e sbiancanti con minimo sanguinamento, minor dolore post-operatorio e guarigione accelerata.</p>
              </div>
              <div class="info-card">
                <h4>Microscopio Operatorio</h4>
                <p>Ingrandimento fino a 25x per endodonzia di precisione e restauri estetici dettagliati.</p>
              </div>
              <div class="info-card">
                <h4>Radiografia Digitale</h4>
                <p>Immagini immediate con riduzione del 90% delle radiazioni rispetto alla pellicola tradizionale.</p>
              </div>
              <div class="info-card">
                <h4>Fotocamera Intraorale</h4>
                <p>Immagini ad alta risoluzione dei denti per diagnosi condivisa con il paziente e documentazione precisa.</p>
              </div>
            </div>

            <h3>Chirurgia Guidata Computer-Assistita</h3>
            <p>
              La <strong>chirurgia guidata</strong> combina le immagini della TAC 3D con un software di pianificazione
              per progettare virtualmente l'intervento implantare. Una dima chirurgica stampata in 3D guida
              il posizionamento degli impianti con <strong>precisione millimetrica</strong>.
            </p>
            <ul class="feature-list">
              <li><strong>Intervento meno invasivo</strong> — incisioni ridotte, spesso senza bisturi</li>
              <li><strong>Tempi operatori ridotti</strong> — pianificazione pre-operatoria dettagliata</li>
              <li><strong>Risultati prevedibili</strong> — posizionamento implantare ottimale</li>
              <li><strong>Recupero piu rapido</strong> — minor trauma chirurgico</li>
            </ul>

            <h3>Sterilizzazione e Sicurezza</h3>
            <p>
              Seguiamo rigorosi protocolli di sterilizzazione con autoclavi di <strong>classe B</strong>
              e un sistema di tracciabilita completa di ogni ciclo di sterilizzazione. Ogni strumento
              viene confezionato singolarmente in busta sterile con indicatore chimico di avvenuta sterilizzazione.
            </p>
          </div>

          <aside class="sidebar">
            <LeadForm
              variant="card"
              title="Visita il Nostro Studio"
              subtitle="Scopri le tecnologie a tua disposizione"
              button-text="Prenota una Visita"
              :show-message="false"
              source="/tecnologie"
              preselected-service="Visita studio"
            />
            <div class="sidebar-card">
              <h4>Dove Siamo</h4>
              <p><strong>Via Monte Circeo 12</strong><br>00015 Monterotondo (RM)</p>
              <p><strong>Orari:</strong><br>Lun-Ven: 10:00-19:00</p>
            </div>
            <div class="sidebar-card">
              <h4>Servizi con Tecnologia Avanzata</h4>
              <ul class="sidebar-links">
                <li><NuxtLink to="/riabilitazione-completa">Riabilitazione All-on-4</NuxtLink></li>
                <li><NuxtLink to="/implantologia">Implantologia</NuxtLink></li>
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
        <h2>Tecnologia al Servizio del Tuo Sorriso</h2>
        <p>Vieni a scoprire le nostre strumentazioni e i vantaggi per i tuoi trattamenti</p>
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
  title: 'Tecnologie Avanzate | TAC 3D, Scanner Intraorale, Laser | Dentista Monterotondo',
  meta: [
    { name: 'description', content: 'Tecnologie dentali avanzate a Monterotondo: TAC Cone Beam 3D, scanner intraorale, laser, chirurgia guidata, microscopio operatorio. Studio all\'avanguardia. Tel: 06 906 23 936' }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalClinic',
    name: 'Dentista Monterotondo - Tecnologie',
    description: 'Studio dentistico dotato di tecnologie avanzate: TAC 3D, scanner intraorale, laser, microscopio operatorio',
    address: { '@type': 'PostalAddress', streetAddress: 'Via Monte Circeo 12', addressLocality: 'Monterotondo', addressRegion: 'RM', postalCode: '00015' },
    telephone: '+39 06 906 23 936'
  },
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Servizi', item: '/#servizi' },
      { name: 'Tecnologie Avanzate', item: '/tecnologie' }
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
