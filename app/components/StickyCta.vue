<template>
  <div class="sticky-cta">
    <a href="tel:+390690623936" class="cta-button call-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      <span>Chiama</span>
    </a>

    <a href="/#contatti" class="cta-button book-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <span>Prenota</span>
    </a>
  </div>
</template>

<style scoped>
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 9998;
  padding-bottom: env(safe-area-inset-bottom);
}

.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 56px;
  width: 50%;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}

.call-button {
  background: #27ae60;
}

.call-button:active {
  background: #1e8449;
}

.book-button {
  background: var(--primary, #0066cc);
}

.book-button:active {
  background: var(--primary-dark, #004d99);
}

.cta-button svg {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .sticky-cta {
    display: flex;
  }
}
</style>
