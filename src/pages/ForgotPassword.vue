<template>
  <q-page class="flex flex-center">
    <ForgotPasswordComponent company_name="ADESUAPA" />
  </q-page>
</template>

<script>
import ForgotPasswordComponent from 'components/ForgotPassword.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ForgotPasswordPage',
  components: { ForgotPasswordComponent }
})
</script>
