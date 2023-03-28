<template>
  <q-page class="flex flex-center">
    <LoginComponent company_name="ADESUAPA" />
  </q-page>
</template>

<script>
import LoginComponent from 'components/Login.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  components: { LoginComponent }
})
</script>
