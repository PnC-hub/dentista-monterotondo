<template>
  <form
    class="lead-form"
    :class="{ 'lead-form--inline': variant === 'inline', 'lead-form--card': variant === 'card' }"
    @submit.prevent="handleSubmit"
  >
    <!-- Anti-spam honeypot -->
    <input type="text" name="_honey" style="display:none" v-model="honey">

    <div v-if="variant === 'card'" class="form-header">
      <h3>{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>

    <div v-if="submitted" class="form-success" role="status" aria-live="polite">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <h4>Richiesta Inviata!</h4>
      <p>Ti ricontatteremo entro 24 ore lavorative. Per urgenze chiama il <a href="tel:+390690623936">06 906 23 936</a>.</p>
    </div>

    <div v-else class="form-fields">
      <div class="form-group">
        <label for="nome">Nome e Cognome *</label>
        <input
          type="text"
          id="nome"
          v-model="form.Nome"
          required
          placeholder="Il tuo nome"
          autocomplete="name"
        >
      </div>

      <div class="form-group">
        <label for="telefono">Telefono *</label>
        <input
          type="tel"
          id="telefono"
          v-model="form.Telefono"
          required
          placeholder="Il tuo numero"
          autocomplete="tel"
        >
      </div>

      <div class="form-group" v-if="showService">
        <label for="servizio">Servizio di interesse</label>
        <select id="servizio" v-model="form.Servizio">
          <option value="">Seleziona un servizio</option>
          <option value="Visita di controllo">Visita di controllo</option>
          <option value="Implantologia">Implantologia</option>
          <option value="Ortodonzia">Ortodonzia</option>
          <option value="Igiene dentale">Igiene dentale</option>
          <option value="Estetica dentale">Estetica dentale</option>
          <option value="Endodonzia">Endodonzia</option>
          <option value="Odontoiatria pediatrica">Odontoiatria pediatrica</option>
          <option value="Faccette estetiche">Faccette estetiche</option>
          <option value="Sedazione cosciente">Sedazione cosciente</option>
          <option value="Riabilitazione completa">Riabilitazione completa</option>
          <option value="Urgenza">Urgenza dentale</option>
          <option value="Altro">Altro</option>
        </select>
      </div>

      <div class="form-group" v-if="showMessage">
        <label for="messaggio">Messaggio</label>
        <textarea
          id="messaggio"
          v-model="form.Messaggio"
          rows="3"
          placeholder="Descrivi brevemente le tue esigenze..."
        ></textarea>
      </div>

      <div class="form-group form-consent">
        <label class="checkbox-label">
          <input type="checkbox" v-model="privacy" required>
          <span>Acconsento al trattamento dei dati personali ai sensi del <NuxtLink to="/privacy" target="_blank">GDPR</NuxtLink></span>
        </label>
      </div>

      <p v-if="error" class="form-error">{{ error }}</p>

      <button type="submit" class="form-submit" :disabled="loading">
        {{ loading ? 'Invio in corso...' : buttonText }}
      </button>
    </div>

    <p v-if="!submitted" class="form-disclaimer">
      I tuoi dati sono al sicuro. Ti ricontatteremo entro 24 ore lavorative.
    </p>
  </form>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'card' | 'inline'
  title?: string
  subtitle?: string
  buttonText?: string
  showService?: boolean
  showMessage?: boolean
  source?: string
  preselectedService?: string
}>(), {
  variant: 'card',
  title: 'Richiedi Informazioni',
  subtitle: '',
  buttonText: 'Richiedi Appuntamento',
  showService: true,
  showMessage: true,
  source: '',
  preselectedService: ''
})

const route = useRoute()
const sourcePage = computed(() => props.source || route.path)

const form = reactive({
  Nome: '',
  Telefono: '',
  Servizio: props.preselectedService || '',
  Messaggio: ''
})
const privacy = ref(false)
const honey = ref('')
const loading = ref(false)
const submitted = ref(false)
const error = ref('')
const submitCount = ref(0)
const lastSubmitTime = ref(0)

async function handleSubmit() {
  const now = Date.now()
  if (submitCount.value >= 3 && now - lastSubmitTime.value < 300000) {
    error.value = 'Troppe richieste. Riprova tra qualche minuto oppure chiamaci al 06 906 23 936.'
    return
  }

  if (honey.value) return
  if (!privacy.value) {
    error.value = 'Devi accettare la privacy policy'
    return
  }

  loading.value = true
  error.value = ''

  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: {
        ...form,
        Sorgente: sourcePage.value
      }
    })
    submitted.value = true
    submitCount.value++
    lastSubmitTime.value = Date.now()

    // GA4 event tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'form',
        event_label: sourcePage.value,
        service: form.Servizio || 'non specificato'
      })
    }
  } catch (e: any) {
    error.value = 'Errore nell\'invio. Chiamaci al 06 906 23 936.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.lead-form {
  width: 100%;
}

.lead-form--card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
}

.lead-form--inline {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.lead-form--inline .form-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
}

.lead-form--inline .form-group {
  flex: 1;
  min-width: 200px;
  margin-bottom: 0;
}

.lead-form--inline .form-consent {
  flex-basis: 100%;
}

.lead-form--inline .form-submit {
  flex-basis: 100%;
}

.form-header {
  margin-bottom: 1.5rem;
}

.form-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.25rem;
}

.form-header p {
  font-size: 0.9rem;
  color: #666;
}

.form-success {
  text-align: center;
  padding: 2rem 1rem;
}

.form-success h4 {
  color: #27ae60;
  font-size: 1.25rem;
  margin: 1rem 0 0.5rem;
}

.form-success p {
  color: #666;
  font-size: 0.95rem;
}

.form-error {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 0.35rem;
}

.form-group input[type="text"],
.form-group input[type="tel"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  color: #333;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: #fafbfc;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0,102,204,0.1);
  background: white;
}

.form-group textarea {
  resize: vertical;
}

.form-consent {
  margin-bottom: 1.25rem;
}

.checkbox-label {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin-top: 3px;
  accent-color: #0066cc;
}

.checkbox-label span {
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
  font-weight: 400;
}

.form-submit {
  width: 100%;
  padding: 0.9rem 1.5rem;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}

.form-submit:hover {
  background: #004d99;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,102,204,0.3);
}

.form-submit:disabled {
  background: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.form-disclaimer {
  text-align: center;
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.75rem;
}
</style>
