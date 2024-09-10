<script setup lang="ts">
import { type CSSProperties, computed } from 'vue'

defineOptions({
  name: 'CircleBtn',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  text?: string
  style?: CSSProperties
  hide?: boolean
}>(), {
  text: '按钮',
  style: undefined,
})

defineEmits(['click'])

const classes = computed(() => {
  return {
    'circle-btn': true,
    'circle-btn-hide': props.hide,
    'circle-btn-hover': props.hide,
  }
})
</script>

<template>
  <div :class="classes" :style="props.style" @click="$emit('click')">
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
.circle-btn {
    font-size: 17px;
    // position: fixed;
    display: flex;
    width: 50px;
    height: 50px;
    // bottom: 100px;
    padding: 5px;
    background: rgba(255,255,255,0.2);
    backdrop-filter: saturate(180%) blur(20px);
    border-radius: 50%;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease;
}

.circle-btn-hover:hover{
  opacity: 1;
}

.circle-btn-hide{
  opacity: 0;
}
</style>
