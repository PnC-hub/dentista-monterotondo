<template>
  <div class="before-after" @mousemove="onMove" @touchmove.prevent="onTouch">
    <div class="ba-container" ref="container">
      <div class="ba-after">
        <img :src="afterImage" :alt="afterLabel" loading="lazy" />
        <span class="ba-label ba-label--after">{{ afterLabel }}</span>
      </div>
      <div class="ba-before" :style="{ width: position + '%' }">
        <img :src="beforeImage" :alt="beforeLabel" loading="lazy" />
        <span class="ba-label ba-label--before">{{ beforeLabel }}</span>
      </div>
      <div class="ba-slider" :style="{ left: position + '%' }">
        <div class="ba-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}>(), {
  beforeLabel: 'Prima',
  afterLabel: 'Dopo'
})

const position = ref(50)
const container = ref<HTMLElement>()
const dragging = ref(false)

function getPosition(clientX: number) {
  if (!container.value) return 50
  const rect = container.value.getBoundingClientRect()
  const x = clientX - rect.left
  return Math.max(0, Math.min(100, (x / rect.width) * 100))
}

function onMove(e: MouseEvent) {
  if (e.buttons === 1) {
    position.value = getPosition(e.clientX)
  }
}

function onTouch(e: TouchEvent) {
  if (e.touches.length === 1) {
    position.value = getPosition(e.touches[0].clientX)
  }
}
</script>

<style scoped>
.ba-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: var(--radius, 12px);
  overflow: hidden;
  cursor: ew-resize;
  user-select: none;
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.ba-after, .ba-before {
  position: absolute;
  inset: 0;
}

.ba-before {
  overflow: hidden;
  z-index: 2;
}

.ba-after img, .ba-before img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ba-before img {
  min-width: 100%;
  width: auto;
}

.ba-label {
  position: absolute;
  bottom: 16px;
  padding: 6px 16px;
  background: rgba(0,0,0,0.65);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ba-label--before { left: 16px; }
.ba-label--after { right: 16px; }

.ba-slider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: white;
  z-index: 3;
  transform: translateX(-50%);
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}

.ba-handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background: var(--primary, #0066cc);
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}
</style>
