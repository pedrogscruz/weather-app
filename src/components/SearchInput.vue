<script setup lang="ts">
import Search from '@/assets/search.svg'
</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
})
</script>

<template>
  <div class="container">
    <Search class="search-icon" fill="#757575" height="18" />
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      :placeholder="placeholder"
      class="search-input"
      data-testid="search-input"
    />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  margin-bottom: 20px;
}

.search-input {
  width: -webkit-fill-available;
  padding: 8px;
  padding-left: 32px;
  margin: 0;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.search-input:focus {
  outline: 2px solid rgba(255, 255, 255, 0.2);
  outline-offset: 2px;
}

.search-input::placeholder {
  color: #757575;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translateY(-50%);
}
</style>
