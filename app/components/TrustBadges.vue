<template>
  <div class="trust-badges">
    <div class="trust-badge" v-for="badge in badges" :key="badge.label">
      <div class="badge-icon" v-html="badge.icon"></div>
      <div class="badge-text">
        <strong>{{ badge.value }}</strong>
        <span>{{ badge.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const badges = [
  {
    value: '25+',
    label: 'Anni di Esperienza',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  },
  {
    value: '10.000+',
    label: 'Pazienti Trattati',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    value: '4.9/5',
    label: 'Google Reviews',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  },
  {
    value: 'Aut. Sanitaria',
    label: 'N. 109/2016',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  }
]
</script>

<style scoped>
.trust-badges {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  transition: transform 0.2s, background 0.2s;
}

.trust-badge:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.12);
}

.badge-icon {
  color: var(--primary, #4da3ff);
  flex-shrink: 0;
}

.badge-text {
  display: flex;
  flex-direction: column;
}

.badge-text strong {
  color: white;
  font-size: 1.1rem;
  line-height: 1.2;
}

.badge-text span {
  color: rgba(255,255,255,0.7);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .trust-badges {
    gap: 0.75rem;
  }
  .trust-badge {
    padding: 0.75rem 1rem;
    flex: 1 1 calc(50% - 0.75rem);
    min-width: 160px;
  }
}
</style>
