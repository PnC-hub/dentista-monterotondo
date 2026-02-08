<template>
  <div class="legal-page">
    <div class="container">
      <h1>Informativa sulla Privacy</h1>
      <p class="legal-subtitle">Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)</p>
      <p class="legal-date">Ultimo aggiornamento: 8 febbraio 2026</p>

      <section>
        <h2>1. Titolare del Trattamento</h2>
        <p>
          Il Titolare del trattamento dei dati personali è <strong>Smiledoc S.r.l.</strong>,
          con sede in Via Monte Circeo 12, 00015 Monterotondo (RM), P.IVA 15131801001.
        </p>
        <p>Per esercitare i diritti previsti dal GDPR, contattare: <strong>Tel. 06 906 23 936</strong>.</p>
        <p>Email: <strong>info@smiledoc.it</strong></p>
      </section>

      <section>
        <h2>2. Dati Raccolti</h2>
        <p>Attraverso il sito dentistamonterotondo.com raccogliamo:</p>
        <ul>
          <li><strong>Dati forniti volontariamente:</strong> nome, cognome, numero di telefono, servizio richiesto, messaggio — raccolti tramite i moduli di contatto presenti sul sito.</li>
          <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, durata della visita — raccolti automaticamente tramite cookie e strumenti di analisi.</li>
        </ul>
      </section>

      <section>
        <h2>3. Finalità del Trattamento</h2>
        <p>I dati personali sono trattati per le seguenti finalità:</p>
        <ul>
          <li><strong>Gestione richieste di contatto:</strong> rispondere alle richieste inviate tramite i moduli del sito (base giuridica: esecuzione di misure precontrattuali, art. 6.1.b GDPR).</li>
          <li><strong>Analisi statistica:</strong> analizzare il traffico del sito in forma aggregata e anonima tramite Google Analytics (base giuridica: consenso, art. 6.1.a GDPR).</li>
          <li><strong>Marketing:</strong> misurare l'efficacia delle campagne pubblicitarie tramite Facebook Pixel e Google Ads (base giuridica: consenso, art. 6.1.a GDPR).</li>
        </ul>
      </section>

      <section>
        <h2>4. Profilazione e Decisioni Automatizzate</h2>
        <p>
          Il sito non effettua attività di profilazione né adotta processi decisionali automatizzati
          ai sensi dell'art. 22 del GDPR. I cookie di analisi e marketing, attivati solo previo consenso,
          non vengono utilizzati per creare profili individuali dell'utente.
        </p>
        <p>
          In caso di future attività di profilazione, l'utente sarà preventivamente informato e il
          trattamento avverrà solo previo consenso esplicito.
        </p>
      </section>

      <section>
        <h2>5. Modalità di Trattamento</h2>
        <p>
          I dati sono trattati con strumenti informatici e telematici, con logiche strettamente correlate
          alle finalità sopra indicate e comunque in modo da garantire la sicurezza e la riservatezza dei dati stessi.
        </p>
      </section>

      <section>
        <h2>6. Comunicazione dei Dati</h2>
        <p>I dati personali potranno essere comunicati a:</p>
        <ul>
          <li>Personale autorizzato dello studio dentistico per la gestione delle richieste.</li>
          <li>Google LLC (Google Analytics, Google Tag Manager) — per analisi statistiche.</li>
          <li>Meta Platforms Inc. (Facebook Pixel) — per finalità di marketing.</li>
        </ul>
        <p>I dati non saranno diffusi né ceduti a terzi per finalità diverse da quelle indicate.</p>
      </section>

      <section>
        <h2>7. Trasferimento Dati Extra-UE</h2>
        <p>
          Alcuni fornitori di servizi (Google, Meta) hanno sede negli Stati Uniti. Il trasferimento avviene
          sulla base delle clausole contrattuali standard approvate dalla Commissione Europea e del
          EU-US Data Privacy Framework.
        </p>
      </section>

      <section>
        <h2>8. Conservazione dei Dati</h2>
        <ul>
          <li><strong>Dati dei moduli di contatto:</strong> conservati per il tempo necessario a gestire la richiesta e per un massimo di 12 mesi.</li>
          <li><strong>Dati di navigazione:</strong> conservati secondo le policy dei singoli strumenti (Google Analytics: 14 mesi).</li>
        </ul>
      </section>

      <section>
        <h2>9. Diritti dell'Interessato</h2>
        <p>Ai sensi degli artt. 15-22 del GDPR, l'interessato ha diritto di:</p>
        <ul>
          <li>Accedere ai propri dati personali.</li>
          <li>Ottenere la rettifica o la cancellazione degli stessi.</li>
          <li>Limitare il trattamento.</li>
          <li>Opporsi al trattamento.</li>
          <li>Ottenere la portabilità dei dati.</li>
          <li>Revocare il consenso in qualsiasi momento.</li>
          <li>Opporsi al trattamento per finalità di marketing diretto.</li>
          <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
        </ul>
      </section>

      <section>
        <h2>10. Cookie</h2>
        <p>
          Per informazioni dettagliate sull'uso dei cookie, consultare la nostra
          <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>.
        </p>
      </section>

      <section>
        <h2>11. Modifiche</h2>
        <p>
          Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento.
          La versione aggiornata sarà sempre disponibile su questa pagina.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy Policy | Dentista Monterotondo',
  meta: [
    { name: 'description', content: 'Informativa sulla privacy del sito dentistamonterotondo.com ai sensi del GDPR - Smiledoc S.r.l.' },
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
</style>
