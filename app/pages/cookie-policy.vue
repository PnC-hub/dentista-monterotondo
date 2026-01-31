<template>
  <div class="legal-page">
    <div class="container">
      <h1>Cookie Policy</h1>
      <p class="legal-subtitle">Informativa sull'utilizzo dei cookie — Art. 122 D.Lgs. 196/2003 e Linee Guida Garante Privacy 10/06/2021</p>
      <p class="legal-date">Ultimo aggiornamento: 31 gennaio 2026</p>

      <section>
        <h2>1. Cosa sono i Cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente,
          dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
        </p>
      </section>

      <section>
        <h2>2. Cookie Tecnici (Necessari)</h2>
        <p>
          Questi cookie sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente.
        </p>
        <div class="cookie-table">
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Fornitore</th>
                <th>Finalità</th>
                <th>Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>dentistamonterotondo.com</td>
                <td>Memorizza le preferenze cookie dell'utente</td>
                <td>12 mesi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>3. Cookie di Analisi</h2>
        <p>
          Utilizzati per raccogliere informazioni sull'utilizzo del sito in forma aggregata.
          Vengono installati solo previo consenso dell'utente.
        </p>
        <div class="cookie-table">
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Fornitore</th>
                <th>Finalità</th>
                <th>Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga, _ga_*</td>
                <td>Google Analytics</td>
                <td>Statistiche di navigazione anonime</td>
                <td>14 mesi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy di Google</a>.
        </p>
      </section>

      <section>
        <h2>4. Cookie di Marketing</h2>
        <p>
          Utilizzati per tracciare i visitatori attraverso i siti web e mostrare annunci pertinenti.
          Vengono installati solo previo consenso dell'utente.
        </p>
        <div class="cookie-table">
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Fornitore</th>
                <th>Finalità</th>
                <th>Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_fbp, fr</td>
                <td>Meta (Facebook)</td>
                <td>Tracciamento conversioni pubblicitarie</td>
                <td>3 mesi</td>
              </tr>
              <tr>
                <td>_gcl_au</td>
                <td>Google Ads</td>
                <td>Tracciamento conversioni Google Ads</td>
                <td>3 mesi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Per maggiori informazioni: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener">Privacy Policy di Meta</a>.
        </p>
      </section>

      <section>
        <h2>5. Gestione del Consenso</h2>
        <p>
          Al primo accesso al sito, un banner informativo permette di accettare o rifiutare i cookie
          non tecnici. L'utente può modificare le proprie preferenze in qualsiasi momento
          cliccando sul link "Gestisci Cookie" presente nel footer del sito.
        </p>
      </section>

      <section>
        <h2>6. Disattivazione dei Cookie dal Browser</h2>
        <p>L'utente può gestire i cookie anche attraverso le impostazioni del proprio browser:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener">Microsoft Edge</a></li>
        </ul>
      </section>

      <section>
        <h2>7. Titolare del Trattamento</h2>
        <p>
          <strong>Smiledoc S.r.l.</strong> — Via Monte Circeo 12, 00015 Monterotondo (RM) — P.IVA 15131801001.
        </p>
        <p>
          Per ulteriori informazioni, consultare la nostra <NuxtLink to="/privacy">Informativa sulla Privacy</NuxtLink>.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Cookie Policy | Dentista Monterotondo',
  meta: [
    { name: 'description', content: 'Cookie Policy del sito dentistamonterotondo.com - Informativa sui cookie utilizzati' },
    { name: 'robots', content: 'noindex, follow' }
  ]
})
</script>

<style scoped>
.legal-page {
  padding: 120px 0 80px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

h1 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.legal-subtitle {
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.legal-date {
  color: #999;
  font-size: 0.85rem;
  margin-bottom: 2.5rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.15rem;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
}

p {
  color: #444;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

ul {
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
}

li {
  color: #444;
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

a {
  color: #0066cc;
}

.cookie-table {
  overflow-x: auto;
  margin: 1rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  text-align: left;
}

th {
  background: #f7f9fc;
  font-weight: 600;
  color: #1a1a2e;
}

td {
  color: #444;
}
</style>
