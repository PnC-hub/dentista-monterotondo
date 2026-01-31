<template>
  <form
    class="lead-form"
    :class="{ 'lead-form--inline': variant === 'inline', 'lead-form--card': variant === 'card' }"
    action="https://formsubmit.co/rec.monterotondo@smiledoc.it"
    method="POST"
  >
    <!-- Anti-spam -->
    <input type="hidden" name="_cc" value="direzione@smiledoc.it">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_subject" :value="emailSubject">
    <input type="text" name="_honey" style="display:none">
    <input type="hidden" name="_next" :value="`https://dentistamonterotondo.com/grazie`">

    <!-- Source tracking -->
    <input type="hidden" name="Sorgente" :value="sourcePage">
    <input type="hidden" name="Sito" value="DentistaMonterotondo.com">

    <div v-if="variant === 'card'" class="form-header">
      <h3>{{ title }}</h3>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>

    <div class="form-fields">
      <div class="form-group">
        <label for="nome">Nome e Cognome *</label>
        <input
          type="text"
          id="nome"
          name="Nome"
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
          name="Telefono"
          required
          placeholder="Il tuo numero"
          autocomplete="tel"
        >
      </div>

      <div class="form-group" v-if="showService">
        <label for="servizio">Servizio di interesse</label>
        <select id="servizio" name="Servizio">
          <option value="">Seleziona un servizio</option>
          <option value="Visita di controllo">Visita di controllo</option>
          <option value="Implantologia">Implantologia</option>
          <option value="Ortodonzia">Ortodonzia</option>
          <option value="Igiene dentale">Igiene dentale</option>
          <option value="Estetica dentale">Estetica dentale</option>
          <option value="Endodonzia">Endodonzia</option>
          <option value="Odontoiatria pediatrica">Odontoiatria pediatrica</option>
          <option value="Urgenza">Urgenza dentale</option>
          <option value="Altro">Altro</option>
        </select>
      </div>

      <div class="form-group" v-if="showMessage">
        <label for="messaggio">Messaggio</label>
        <textarea
          id="messaggio"
          name="Messaggio"
          rows="3"
          placeholder="Descrivi brevemente le tue esigenze..."
        ></textarea>
      </div>

      <div class="form-group form-consent">
        <label class="checkbox-label">
          <input type="checkbox" name="Privacy" value="Accettata" required>
          <span>Acconsento al trattamento dei dati personali ai sensi del GDPR</span>
        </label>
      </div>

      <button type="submit" class="form-submit">
        {{ buttonText }}
      </button>
    </div>

    <p class="form-disclaimer">
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
const emailSubject = computed(() => {
  const page = sourcePage.value === '/' ? 'Homepage' : sourcePage.value.replace('/', '').replace(/-/g, ' ')
  return `[DentistaMonterotondo] Nuova richiesta da ${page}`
})
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

.form-disclaimer {
  text-align: center;
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.75rem;
}
</style>
