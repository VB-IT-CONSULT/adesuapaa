<template>
  <q-page class="flex q-pa-md">
    <div class="test-h1">
      SMS PAGE
    </div>
  </q-page>
</template>

<script>
// import LoginComponent from 'components/Login.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SmsPage',
  components: {},
  setup() {

    return {
      lorem: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et ex ea commodo.
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure.`
    }
  }
})
</script>
