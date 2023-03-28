<template>
  <q-page class="flex flex-center">
    <RegisterComponent company_name="ADESUAPA" />
  </q-page>
</template>

<script>
import RegisterComponent from 'components/Register.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterPage',
  components: { RegisterComponent }
})
</script>
