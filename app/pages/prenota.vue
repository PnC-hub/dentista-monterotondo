<template>
  <div class="prenota-page">
    <section class="prenota-section">
      <div class="container">
        <!-- Page Header -->
        <div class="header-block">
          <h1>Prenota una Visita</h1>
          <p class="intro-text">
            Compila il modulo per richiedere un appuntamento presso il nostro studio dentistico a Monterotondo.
            Ti ricontatteremo entro 24 ore lavorative.
          </p>
        </div>

        <!-- Lead Form Card -->
        <div class="form-wrapper">
          <LeadForm
            variant="card"
            title="Richiedi Appuntamento"
            subtitle="Tutti i campi con * sono obbligatori"
            button-text="Prenota Ora"
            :show-service="true"
            :show-message="true"
            source="/prenota"
          />
        </div>

        <!-- Contact Info -->
        <div class="contact-info-block">
          <div class="info-section">
            <h3>Contattaci Direttamente</h3>
            <p>Preferisci parlare con noi prima di prenotare? Ecco come raggiungerci:</p>
          </div>

          <div class="contact-cards">
            <div class="contact-card">
              <div class="contact-icon phone-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h4>Telefono</h4>
              <a href="tel:06-906-23-936" class="contact-link">06 906 23 936</a>
              <p class="contact-note">Chiama durante gli orari di apertura</p>
            </div>

            <div class="contact-card">
              <div class="contact-icon location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h4>Indirizzo</h4>
              <p class="contact-detail">Via Monte Circeo 12<br>00015 Monterotondo (RM)</p>
            </div>

            <div class="contact-card">
              <div class="contact-icon hours-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4>Orari</h4>
              <p class="contact-detail">Lunedì - Venerdì<br>10:00 - 19:00</p>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section">
          <h2>Domande Frequenti sulla Prenotazione</h2>
          <div class="faq-items">
            <div class="faq-item">
              <h4>Come posso prenotare una visita?</h4>
              <p>
                Puoi prenotare compilando il modulo qui sopra oppure contattandoci telefonicamente al numero
                <a href="tel:06-906-23-936">06 906 23 936</a>. Ti ricontatteremo per confermato l'appuntamento
                entro 24 ore lavorative.
              </p>
            </div>

            <div class="faq-item">
              <h4>Quali servizi richiedono una visita preliminare?</h4>
              <p>
                Consigliamo una visita preliminare per tutti i trattamenti importanti come implantologia,
                ortodonzia avanzata e riabilitazioni complesse. La visita di controllo è la prima tappa
                per pianificare il tuo percorso di cura.
              </p>
            </div>

            <div class="faq-item">
              <h4>Quanto tempo dura la prima visita?</h4>
              <p>
                La prima visita di controllo dura generalmente 45-60 minuti. Durante questo tempo eseguiremo
                una valutazione completa della tua situazione orale, Ti mostreremo le opzioni di trattamento
                più adatte alle tue esigenze.
              </p>
            </div>

            <div class="faq-item">
              <h4>Quali documenti devo portare?</h4>
              <p>
                Ti consigliamo di portare un documento di identità valido e, se disponibili, eventuali referti
                o documentazione di precedenti lavori odontoiatrici. Se hai radiografie recenti da altri studi,
                portale con te.
              </p>
            </div>

            <div class="faq-item">
              <h4>Accettate il passaparola e le assicurazioni?</h4>
              <p>
                Sì, accettiamo molte assicurazioni sanitarie e convenzionamenti. Contattaci per verificare
                se il tuo piano assicurativo è convenzionato con il nostro studio.
              </p>
            </div>

            <div class="faq-item">
              <h4>Mi fate pagare la visita di controllo?</h4>
              <p>
                Contattaci direttamente per informazioni su tariffe e piani di pagamento. Vogliamo che
                tutti i pazienti possano accedere ai nostri servizi diagnostici.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Configuration
useHead({
  title: 'Prenota Visita | Dentista Monterotondo',
  meta: [
    {
      name: 'description',
      content: 'Prenota una visita presso il nostro studio dentistico a Monterotondo. Contattaci per appuntamenti di controllo, implantologia, ortodonzia e altri trattamenti dentali.'
    },
    {
      name: 'keywords',
      content: 'prenotazione visita dentista, appuntamento dentista Monterotondo, visita dentale'
    },
    {
      property: 'og:title',
      content: 'Prenota una Visita | Dentista Monterotondo'
    },
    {
      property: 'og:description',
      content: 'Prenota una visita presso il nostro studio dentistico a Monterotondo. Contattaci per appuntamenti di controllo, implantologia e altri servizi.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<style scoped>
:root {
  --primary: #0066cc;
  --secondary: #1a1a2e;
  --text-light: #666;
  --border-light: #e5e7eb;
  --bg-light: #f9fafb;
  --white: #ffffff;
}

.prenota-page {
  width: 100%;
}

.prenota-section {
  padding-top: 100px;
  padding-bottom: 80px;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.03) 0%, rgba(26, 26, 46, 0.02) 100%);
}

.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Block */
.header-block {
  text-align: center;
  margin-bottom: 3rem;
}

.header-block h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .header-block h1 {
    font-size: 2rem;
  }
}

.intro-text {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

/* Form Wrapper */
.form-wrapper {
  margin-bottom: 3rem;
}

/* Contact Info Block */
.contact-info-block {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border-light);
}

.info-section {
  text-align: center;
  margin-bottom: 2rem;
}

.info-section h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.info-section p {
  color: var(--text-light);
  font-size: 1rem;
  margin: 0;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  text-align: center;
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(0, 102, 204, 0.15);
  transform: translateY(-4px);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  color: var(--white);
}

.phone-icon {
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
}

.location-icon {
  background: linear-gradient(135deg, #27ae60 0%, #1e8449 100%);
}

.hours-icon {
  background: linear-gradient(135deg, #f39c12 0%, #d68910 100%);
}

.contact-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.contact-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.25rem;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #0052a3;
  text-decoration: underline;
}

.contact-detail {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.contact-note {
  color: #999;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

/* FAQ Section */
.faq-section {
  margin-top: 2rem;
}

.faq-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--secondary);
  text-align: center;
  margin-bottom: 2rem;
}

.faq-items {
  display: grid;
  gap: 1.25rem;
}

.faq-item {
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
}

.faq-item h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--secondary);
  margin: 0 0 0.5rem 0;
}

.faq-item p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.faq-item a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.faq-item a:hover {
  color: #0052a3;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .prenota-section {
    padding-top: 80px;
    padding-bottom: 60px;
  }

  .container {
    padding: 0 16px;
  }

  .header-block {
    margin-bottom: 2rem;
  }

  .header-block h1 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  .intro-text {
    font-size: 1rem;
  }

  .form-wrapper {
    margin-bottom: 2rem;
  }

  .contact-info-block {
    margin-top: 3rem;
    padding-top: 2rem;
  }

  .info-section h3 {
    font-size: 1.25rem;
  }

  .contact-cards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .faq-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .faq-item {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .prenota-section {
    padding-top: 70px;
    padding-bottom: 50px;
  }

  .header-block h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .intro-text {
    font-size: 0.95rem;
  }

  .contact-card {
    padding: 1.25rem;
  }

  .faq-item {
    padding: 1rem;
  }

  .faq-item h4 {
    font-size: 0.95rem;
  }

  .faq-item p {
    font-size: 0.9rem;
  }
}
</style>
