<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isVisible" class="exit-popup-overlay" @click="close">
        <div class="exit-popup-card" @click.stop>
          <button class="close-btn" @click="close" aria-label="Chiudi">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <h2 class="title">Stai Andando Via?</h2>
          <p class="subtitle">Lascia il tuo numero, ti richiamiamo noi entro 24 ore</p>

          <form v-if="!submitted" @submit.prevent="handleSubmit" class="form">
            <input
              v-model="formData.nome"
              type="text"
              placeholder="Nome *"
              required
              class="input"
            />

            <input
              v-model="formData.telefono"
              type="tel"
              placeholder="Telefono *"
              required
              pattern="[0-9\s\+\-\(\)]+"
              class="input"
            />

            <!-- Honeypot -->
            <input
              v-model="formData.website"
              type="text"
              name="website"
              tabindex="-1"
              autocomplete="off"
              class="honeypot"
            />

            <label class="privacy-label">
              <input
                v-model="formData.privacy"
                type="checkbox"
                required
                class="checkbox"
              />
              <span>Acconsento al trattamento dei dati secondo la <a href="/privacy" target="_blank">Privacy Policy</a></span>
            </label>

            <button type="submit" :disabled="loading" class="submit-btn">
              {{ loading ? 'Invio...' : 'Richiamami' }}
            </button>

            <p v-if="error" class="error">{{ error }}</p>
          </form>

          <div v-else class="success">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <h3>Grazie!</h3>
            <p>Ti ricontatteremo entro 24 ore</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const isVisible = ref(false)
const submitted = ref(false)
const loading = ref(false)
const error = ref('')

const formData = reactive({
  nome: '',
  telefono: '',
  privacy: false,
  website: '' // honeypot
})

const hasShownThisSession = () => {
  return sessionStorage.getItem('exitPopupShown') === 'true'
}

const markAsShown = () => {
  sessionStorage.setItem('exitPopupShown', 'true')
}

const handleMouseLeave = (e: MouseEvent) => {
  if (e.clientY <= 0 && !hasShownThisSession() && !isVisible.value) {
    isVisible.value = true
    markAsShown()
  }
}

const close = () => {
  isVisible.value = false
}

const handleSubmit = async () => {
  // Honeypot check
  if (formData.website) {
    return
  }

  loading.value = true
  error.value = ''

  try {
    const response = await $fetch('/api/lead', {
      method: 'POST',
      body: {
        nome: formData.nome,
        telefono: formData.telefono,
        privacy: formData.privacy,
        page_source: 'Exit Popup'
      }
    })

    submitted.value = true

    setTimeout(() => {
      close()
    }, 3000)
  } catch (e: any) {
    error.value = 'Si è verificato un errore. Riprova.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (process.client && !hasShownThisSession()) {
    document.addEventListener('mouseleave', handleMouseLeave)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    document.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<style scoped>
.exit-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1rem;
}

.exit-popup-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 480px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #f0f0f0;
  color: #333;
}

.title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input {
  padding: 0.875rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--primary, #0066cc);
}

.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
}

.privacy-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
}

.checkbox {
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.privacy-label a {
  color: var(--primary, #0066cc);
  text-decoration: underline;
}

.submit-btn {
  background: var(--primary, #0066cc);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-dark, #004d99);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: #e74c3c;
  font-size: 0.875rem;
  text-align: center;
}

.success {
  text-align: center;
  padding: 1rem 0;
}

.success svg {
  margin: 0 auto 1rem;
}

.success h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #27ae60;
  margin-bottom: 0.5rem;
}

.success p {
  font-size: 1rem;
  color: #666;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .exit-popup-card {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
