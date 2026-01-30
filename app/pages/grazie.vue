<template>
  <div class="thanks-page">
    <section class="thanks-hero">
      <div class="container">
        <div class="thanks-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h1>Richiesta Ricevuta</h1>
        <p class="thanks-text">
          La tua richiesta e stata inviata correttamente. Il nostro team ti ricontattera
          entro 24 ore lavorative per fissare il tuo appuntamento.
        </p>
        <div class="thanks-info">
          <div class="thanks-card">
            <strong>Hai urgenza?</strong>
            <p>Chiamaci direttamente</p>
            <a href="tel:+390690623936" class="btn btn-primary">06 906 23 936</a>
          </div>
        </div>
        <NuxtLink to="/" class="back-link">Torna alla Homepage</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Richiesta Inviata | Dentista Monterotondo',
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<style scoped>
.thanks-page { padding-top: 72px; }
.thanks-hero { padding: 100px 0; text-align: center; }
.thanks-icon { color: #0066cc; margin-bottom: 1.5rem; }
.thanks-hero h1 { font-size: 2.5rem; color: #1a1a2e; margin-bottom: 1rem; }
.thanks-text { font-size: 1.15rem; color: #666; max-width: 500px; margin: 0 auto 2rem; }
.thanks-card { background: #f7f9fc; padding: 2rem; border-radius: 12px; display: inline-block; margin-bottom: 2rem; }
.thanks-card strong { display: block; color: #1a1a2e; font-size: 1.1rem; margin-bottom: 0.25rem; }
.thanks-card p { color: #666; margin-bottom: 1rem; }
.btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.9rem 1.75rem; border-radius: 8px; font-weight: 600; font-size: 1rem; text-decoration: none; }
.btn-primary { background: #0066cc; color: white; }
.btn-primary:hover { background: #004d99; }
.back-link { color: #0066cc; font-weight: 600; }
</style>
