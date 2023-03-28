<template>
  <q-card class="my-card login-box card-outline">
    <q-card-section>
      <div class="text-h1 text-bold text-center">
        <q-avatar square size="100px">
          <img :src="logoSrc">
        </q-avatar>
      </div>
      <div class="text-overline text-center" v-if="company_name">
        {{ company_name }} ADMINS
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <p class="login-box-msg">Sign in to start your session</p>
    </q-card-section>

    <q-card-actions vertical>
      <div class="q-pa-md">
        <q-form autocorrect="off" auto autocapitalize="off" autocomplete="off" spellcheck="false" class="q-gutter-md">
          <q-input :class="response ? 'animated rubberBand' : ''" type="text" outlined v-model="userData"
            :dense="data.dense" placeholder="User ID" lazy-rules :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Please enter your user id or email',
            ]">
            <template v-slot:append>
              <q-icon name="account_circle" size="md" />
            </template>
          </q-input>

          <q-input ref="iphasiwediRef" v-if="response" :class="response ? 'animated rubberBand' : ''" outlined
            :dense="data.dense" type="password" v-model="password" label="Your pasword *" @keyup.enter="processLogin"
            lazy-rules :rules="[
              (val) => (val && val.length > 0) || 'Please enter your pasword',
            ]">
            <template v-slot:append>
              <q-icon name="password" size="md" />
            </template>
          </q-input>
          <q-btn :loading="isLoading" color="primary" @click="processLogin" style="width: 95%">
            CONTINUE
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Loading...
            </template>
          </q-btn>
        </q-form>
        <div class="column justify-start q-mt-md">
          <!-- <div> Don't have an account? <router-link class="text-blue" to="/register"> Create account</router-link></div> -->
          <div> <router-link class="text-blue" to="/forgot-password"> Forgot Password? </router-link></div>
        </div>
        <div class="column items-center justify-center q-mt-xl">
          <span> Copy &copy; {{ company_name }}. All rights reserved. </span>
          <router-link class="text-blue" to="/"> Back to home </router-link>
        </div>
      </div>
    </q-card-actions>
  </q-card>
</template>

<style scoped>
.text-h1 {
  font-size: 2.5rem;
  line-height: 1.2;
}

.login-box-msg,
.register-box-msg {
  margin: 0;
  padding: 0 20px 20px;
  text-align: center;
}

.login-box,
.register-box {
  width: 360px;
}

.card-outline {
  border-top: 4px solid #007bff;
}
</style>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '../boot/axios'

export default defineComponent({
  name: 'LoginComponent',
  props: {
    company_name: {
      type: String,
      required: false
    }
  },
  setup() {

    const isLoading = ref(false)
    const router = useRouter()
    const userData = ref('')
    const password = ref('')
    const logoSrc = ref('/black.jpeg') // ../images/svg/648-victory-success.svg
    const response = ref(false)
    const data = ref({
      dense: true,
      isChecked: true,
      emailIsPassed: false,
    })

    const processLogin = () => {

    }

    return {
      data,
      isLoading,
      userData,
      password,
      processLogin,
      response,
      logoSrc
    }
  }
})
</script>
