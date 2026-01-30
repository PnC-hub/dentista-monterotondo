<template>
  <div class="page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">Studio Dentistico a Monterotondo</div>
        <h1>Il Tuo <span class="highlight">Dentista</span> di Fiducia a <span class="highlight">Monterotondo</span></h1>
        <p class="hero-text">
          Cerchi un dentista a Monterotondo? Il nostro studio in Via Monte Circeo 12
          offre cure odontoiatriche di qualità con tecnologie all'avanguardia.
          Dalla prevenzione all'implantologia, siamo il punto di riferimento per la salute del tuo sorriso.
        </p>

        <!-- Lead Form Above Fold -->
        <div class="hero-form">
          <LeadForm variant="inline" title="Prenota una Visita" button-text="Prenota Ora" :show-message="false" source="/" />
        </div>

        <!-- Social Proof Stats -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Anni di esperienza</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2000+</div>
            <div class="stat-label">Pazienti soddisfatti</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">Tasso di soddisfazione</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            </div>
            <div class="stat-label">Tecnologie digitali</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servizi Section -->
    <section class="services-section" id="servizi">
      <div class="container">
        <div class="section-header">
          <span class="section-label">I Nostri Servizi</span>
          <h2>Servizi Odontoiatrici a Monterotondo</h2>
          <p>Offriamo una gamma completa di trattamenti dentali per tutta la famiglia</p>
        </div>
        <div class="services-grid">
          <NuxtLink to="/implantologia" class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            </div>
            <h3>Implantologia</h3>
            <p>Impianti dentali con tecnologia computer-guidata per risultati precisi e duraturi. Sostituzione di denti mancanti con soluzioni fisse.</p>
            <ul class="service-features">
              <li>Chirurgia guidata 3D</li>
              <li>Carico immediato</li>
              <li>Materiali certificati</li>
            </ul>
          </NuxtLink>

          <NuxtLink to="/ortodonzia" class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
            </div>
            <h3>Ortodonzia</h3>
            <p>Allineamento dentale per adulti e bambini con apparecchi tradizionali e allineatori trasparenti invisibili.</p>
            <ul class="service-features">
              <li>Allineatori invisibili</li>
              <li>Ortodonzia pediatrica</li>
              <li>Apparecchi estetici</li>
            </ul>
          </NuxtLink>

          <NuxtLink to="/igiene-dentale" class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <h3>Igiene e Prevenzione</h3>
            <p>Pulizia dentale professionale, sbiancamento e programmi di prevenzione per mantenere i denti sani nel tempo.</p>
            <ul class="service-features">
              <li>Pulizia professionale</li>
              <li>Sbiancamento dentale</li>
              <li>Sigillature preventive</li>
            </ul>
          </NuxtLink>

          <NuxtLink to="/estetica-dentale" class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h3>Estetica Dentale</h3>
            <p>Faccette, ricostruzioni estetiche e sbiancamento per un sorriso luminoso e naturale che valorizza il tuo viso.</p>
            <ul class="service-features">
              <li>Faccette dentali</li>
              <li>Ricostruzioni estetiche</li>
              <li>Smile design</li>
            </ul>
          </NuxtLink>

          <NuxtLink to="/endodonzia" class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3>Endodonzia</h3>
            <p>Devitalizzazioni e trattamenti canalari con tecniche moderne per salvare i denti compromessi.</p>
            <ul class="service-features">
              <li>Microscopio operatorio</li>
              <li>Strumenti rotanti</li>
              <li>Anestesia indolore</li>
            </ul>
          </NuxtLink>

          <NuxtLink to="/odontoiatria-pediatrica" class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>Odontoiatria Pediatrica</h3>
            <p>Cure dentali dedicate ai bambini in un ambiente accogliente, con approccio delicato e rassicurante.</p>
            <ul class="service-features">
              <li>Ambiente a misura di bambino</li>
              <li>Prevenzione carie</li>
              <li>Educazione all'igiene</li>
            </ul>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Perché Sceglierci Section -->
    <section class="about-section" id="perche-noi">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <span class="section-label">Perché Sceglierci</span>
            <h2>Il Tuo Studio Dentistico a Monterotondo</h2>
            <p>
              Da anni siamo il punto di riferimento per chi cerca un <strong>dentista a Monterotondo</strong>
              e nelle zone limitrofe. Il nostro studio in Via Monte Circeo 12 accoglie pazienti di tutte le età
              con professionalità e attenzione.
            </p>
            <p>
              Crediamo che ogni paziente meriti cure di qualità in un ambiente confortevole.
              Per questo abbiamo investito nelle migliori tecnologie e nella formazione continua
              del nostro team di specialisti.
            </p>
            <div class="about-stats">
              <div class="stat">
                <div class="stat-number">15+</div>
                <div class="stat-label">Anni di esperienza</div>
              </div>
              <div class="stat">
                <div class="stat-number">2000+</div>
                <div class="stat-label">Pazienti soddisfatti</div>
              </div>
              <div class="stat">
                <div class="stat-number">98%</div>
                <div class="stat-label">Tasso di soddisfazione</div>
              </div>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <h4>Prima Visita Completa</h4>
                <p>Consulenza completa con piano di trattamento personalizzato</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <h4>Metodo Indolore</h4>
                <p>Protocolli avanzati per trattamenti senza dolore e senza ansia</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div>
                <h4>Appuntamenti Flessibili</h4>
                <p>Orari comodi dal lunedì al venerdì, anche in pausa pranzo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologie Section -->
    <section class="tech-section" id="tecnologie">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Tecnologie</span>
          <h2>Strumentazione All'Avanguardia</h2>
          <p>Investiamo in tecnologie digitali per diagnosi precise e trattamenti minimamente invasivi</p>
        </div>
        <div class="tech-grid">
          <div class="tech-card">
            <div class="tech-number">01</div>
            <h3>TAC Cone Beam 3D</h3>
            <p>Imaging tridimensionale per pianificazione implantare di massima precisione, direttamente in studio.</p>
          </div>
          <div class="tech-card">
            <div class="tech-number">02</div>
            <h3>Scanner Intraorale</h3>
            <p>Impronte digitali senza paste, per protesi e allineatori con la massima accuratezza e comfort.</p>
          </div>
          <div class="tech-card">
            <div class="tech-number">03</div>
            <h3>Laser Diagnostico</h3>
            <p>Diagnosi precoce delle carie senza raggi X, per una prevenzione sicura e non invasiva.</p>
          </div>
          <div class="tech-card">
            <div class="tech-number">04</div>
            <h3>Chirurgia Guidata</h3>
            <p>Impianti posizionati con guide computerizzate per interventi rapidi e predicibili.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Zone Servite Section -->
    <section class="zones-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Area di Servizio</span>
          <h2>Dentista per Monterotondo e Dintorni</h2>
          <p>Raggiungi facilmente il nostro studio da tutta la zona nord di Roma</p>
        </div>
        <div class="zones-grid">
          <div class="zone-card">
            <h3>Monterotondo</h3>
            <p>Centro, Monterotondo Scalo, zona industriale</p>
          </div>
          <div class="zone-card">
            <h3>Mentana</h3>
            <p>A pochi minuti dal nostro studio</p>
          </div>
          <div class="zone-card">
            <h3>Fonte Nuova</h3>
            <p>Tor Lupara, Santa Lucia</p>
          </div>
          <div class="zone-card">
            <h3>Guidonia</h3>
            <p>Facilmente raggiungibile</p>
          </div>
          <div class="zone-card">
            <h3>Fiano Romano</h3>
            <p>Vicino all'uscita autostradale</p>
          </div>
          <div class="zone-card">
            <h3>Roma Nord</h3>
            <p>Bufalotta, Talenti, Montesacro</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Domande Frequenti</span>
          <h2>Hai Domande?</h2>
        </div>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Quanto costa la prima visita?</h3>
            <p>La prima visita include una valutazione completa della salute orale e un preventivo personalizzato. Contattaci per informazioni sui costi.</p>
          </div>
          <div class="faq-item">
            <h3>Come posso prenotare un appuntamento?</h3>
            <p>Puoi chiamarci al numero 06 906 23 936 dal lunedì al venerdì, dalle 10:00 alle 19:00. Ti risponderemo subito.</p>
          </div>
          <div class="faq-item">
            <h3>Accettate pazienti urgenti?</h3>
            <p>Sì, cerchiamo sempre di dare priorità alle urgenze come dolori acuti o traumi dentali. Chiamaci e troveremo una soluzione.</p>
          </div>
          <div class="faq-item">
            <h3>Dove si trova lo studio?</h3>
            <p>Siamo in Via Monte Circeo 12 a Monterotondo. Facilmente raggiungibile anche da Mentana, Fonte Nuova e Roma Nord.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contatti Section -->
    <section class="contact-section" id="contatti">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <span class="section-label">Contatti</span>
            <h2>Dove Trovarci</h2>
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <strong>Indirizzo</strong>
                  <p>Via Monte Circeo 12<br>00015 Monterotondo (RM)</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <strong>Telefono</strong>
                  <p><a href="tel:+390690623936">06 906 23 936</a></p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <strong>Orari di Apertura</strong>
                  <p>Lunedì - Venerdì: 10:00 - 19:00<br>Sabato e Domenica: Chiuso</p>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <LeadForm
              variant="card"
              title="Richiedi un Appuntamento"
              subtitle="Compila il form, ti ricontatteremo entro 24 ore"
              button-text="Invia Richiesta"
              source="/"
            />
          </div>
        </div>
        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5!2d12.618!3d42.053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60f8c1d6c5a1%3A0x8f8f8f8f8f8f8f8f!2sVia+Monte+Circeo+12%2C+00015+Monterotondo+RM!5e0!3m2!1sit!2sit!4v1706000000000"
            width="100%"
            height="400"
            style="border:0; border-radius: var(--radius);"
            allowfullscreen=""
            loading="lazy"
            title="Studio Dentistico Monterotondo - Via Monte Circeo 12">
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dentista Monterotondo | Studio Dentistico Via Monte Circeo 12 | Cure Dentali di Qualità',
  meta: [
    {
      name: 'description',
      content: 'Cerchi un dentista a Monterotondo? Studio dentistico in Via Monte Circeo 12 con tecnologie digitali avanzate. Implantologia, ortodonzia, igiene dentale. Chiama 06 906 23 936'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'Dentist',
    name: 'Dentista Monterotondo',
    image: 'https://dentistamonterotondo.com/images/studio.jpg',
    telephone: '+39 06 906 23 936',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Monte Circeo 12',
      addressLocality: 'Monterotondo',
      addressRegion: 'RM',
      postalCode: '00015',
      addressCountry: 'IT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.0533,
      longitude: 12.6186
    },
    url: 'https://dentistamonterotondo.com',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '156'
    },
    areaServed: [
      { '@type': 'City', name: 'Monterotondo' },
      { '@type': 'City', name: 'Mentana' },
      { '@type': 'City', name: 'Fonte Nuova' },
      { '@type': 'City', name: 'Guidonia' },
      { '@type': 'City', name: 'Fiano Romano' },
      { '@type': 'City', name: 'Roma' }
    ],
    medicalSpecialty: [
      'Implantology',
      'Orthodontics',
      'Preventive Dentistry',
      'Cosmetic Dentistry',
      'Endodontics',
      'Pediatric Dentistry'
    ]
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto costa la prima visita dal dentista a Monterotondo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La prima visita include una valutazione completa della salute orale e un preventivo personalizzato. Contattaci per informazioni sui costi.'
        }
      },
      {
        '@type': 'Question',
        name: 'Come posso prenotare un appuntamento dal dentista a Monterotondo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puoi chiamare al numero 06 906 23 936 dal lunedì al venerdì, dalle 10:00 alle 19:00.'
        }
      },
      {
        '@type': 'Question',
        name: 'Dove si trova lo studio dentistico a Monterotondo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lo studio si trova in Via Monte Circeo 12 a Monterotondo (RM). Facilmente raggiungibile anche da Mentana, Fonte Nuova e Roma Nord.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quali servizi offre il dentista a Monterotondo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Offriamo implantologia computer-guidata, ortodonzia con allineatori invisibili, igiene e prevenzione, estetica dentale, endodonzia e odontoiatria pediatrica.'
        }
      }
    ]
  }
])
</script>

<style>
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero */
.hero {
  padding-top: 120px;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
  background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg) 100%);
  max-width: 1200px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--secondary);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero h1 .highlight {
  color: var(--primary);
}

.hero-text {
  font-size: 1.15rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  max-width: 700px;
}

.hero-form {
  margin-bottom: 3rem;
  max-width: 700px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 700px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
}

.stat-number svg {
  color: var(--primary);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.3;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-label {
  display: inline-block;
  color: var(--primary);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.section-header p {
  color: var(--text-light);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Services Section */
.services-section {
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: white;
  border: 1px solid var(--border);
  padding: 2rem;
  border-radius: var(--radius);
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
  display: block;
}

.service-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
  transform: translateY(-4px);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: var(--primary-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  margin-bottom: 1.25rem;
}

.service-card h3 {
  font-size: 1.25rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.service-card > p {
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  font-size: 0.9rem;
}

.service-features li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
}

/* About Section */
.about-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-content h2 {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.about-content p {
  color: var(--text-light);
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-light);
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.feature-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: var(--radius);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.feature-card h4 {
  font-size: 1rem;
  color: var(--secondary);
  margin-bottom: 0.25rem;
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* Tech Section */
.tech-section {
  padding: 80px 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.tech-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.tech-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.2;
  margin-bottom: 0.5rem;
}

.tech-card h3 {
  font-size: 1.1rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.tech-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}

/* Zones Section */
.zones-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.zones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.zone-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius);
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.2s;
}

.zone-card:hover {
  border-color: var(--primary);
}

.zone-card h3 {
  font-size: 1.1rem;
  color: var(--secondary);
  margin-bottom: 0.25rem;
}

.zone-card p {
  font-size: 0.85rem;
  color: var(--text-light);
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.faq-item {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.faq-item h3 {
  font-size: 1rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.faq-item p {
  color: var(--text-light);
  font-size: 0.95rem;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-info h2 {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
}

.contact-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.contact-item strong {
  display: block;
  color: var(--secondary);
  margin-bottom: 0.25rem;
}

.contact-item p {
  color: var(--text-light);
  margin: 0;
}

.contact-form-wrapper {
  display: flex;
  align-items: flex-start;
}

.contact-map {
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    padding-bottom: 60px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-stats {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .about-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
