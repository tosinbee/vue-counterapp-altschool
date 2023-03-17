<template>
  <div class="main-container">
    <h2 class="header">Run this thing: {{ count }}</h2>
    <div class="input-wrapper">
      <input class="input-field" type="number" v-model="value" />
      <input class='submit' type='submit' @click='setValue(value)' value='Set Value'>
    </div>
    <div class="button-container">
      <button class="button increase-num" @click="increment">
        INCREMENT
      </button>
      <button class="button reduce-num" @click="decrement">
        DECREMENT
      </button>
    </div>
    <button class="button reset" @click="reset">
      RESET
    </button>
  </div>
</template>

<script>
import useCounter from '@/composables/counterComposable'

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter()

    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      value: 0,
    }
  },
}
</script>