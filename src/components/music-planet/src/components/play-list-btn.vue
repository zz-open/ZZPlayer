<script setup lang="ts">
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'PlayListBtn',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  text?: string
  style?: CSSProperties
}>(), {
  text: '按钮',
  style: undefined,
})

defineEmits(['click'])
</script>

<template>
  <div class="play-list-btn" :style="props.style" @click="$emit('click')">
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
.play-list-btn {
    font-size: 14px;
    position: fixed;
    display: flex;
    width: 50px;
    height: 50px;
    bottom: 100px;
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
}
</style>
