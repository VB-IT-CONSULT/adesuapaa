<template>
  <div>
    <q-card class="my-card login-box card-outline ">
      <q-card-section>
        <div class="row">
          <div class="col-1">
            <q-icon v-show="passwordResetProgress === 'confirmationStage'" name="arrow_back" color="primary" size="20px"
              class="cursor-pointer q-mt-sm" @click="backToEnterCodePage" />
          </div>
          <div class="col-8 offset-1">
            <div :class="$q.platform.is.mobile ? 'text-h6 text-center' : 'text-h6 text-center'" v-if="company_name">
              {{ passwordResetProgress === 'initailStage' ? 'Recover Password' : passwordResetProgress ===
              'confirmationStage' ? 'Enter Verification Code' : passwordResetProgress === 'finalStage' ?
              'Enter New Password' : ''}}
            </div>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <p class="login-box-msg text-caption">
          {{
  passwordResetProgress === 'initailStage' ?
  'Please enter your User ID below' : passwordResetProgress === 'confirmationStage' ? `We have sent a
          verification code via SMS and Email to the email address
          and phone number linked to this account` : passwordResetProgress === 'finalStage' ? `Please type your new
          password below` : ''
          }}
        </p>
      </q-card-section>

      <q-card-actions vertical>
        <div class="q-pa-md">
          <q-form autocorrect="off" auto autocapitalize="off" autocomplete="off" spellcheck="false" class="q-gutter-md"
            @keyup.enter="processLogin">
            <template v-if="passwordResetProgress === 'initailStage'">
              <div class="row q-col-gutter-x-md q-pl-md">
                <div class="col-xs-12 col-md-12">
                  <label class="text-caption text-weight-medium">User ID</label>
                  <q-input outlined :dense="true" type="text" v-model="userId"> </q-input>
                </div>
              </div>
            </template>
            <template v-if="passwordResetProgress === 'confirmationStage'">
              <div class="row q-col-gutter-x-md q-pl-md">
                <div class="col-xs-12 col-md-12">
                  <label class="text-caption text-weight-medium">Verification Code</label>
                  <q-input outlined :dense="true" type="text" v-model="confirmationCode"> </q-input>
                </div>
              </div>
              <div class="column items-center justify-center q-mt-md">
                <span class="text-caption"> Didn't get the code? <span
                    :class="disableResendText ? `text-blue cursor-pointer disabled` : 'text-blue cursor-pointer'"
                    @click="disableResendText ? '' : requestPasswordResetConfirmationCode()">{{ resendText }}</span>
                </span>
              </div>
            </template>
            <template v-if="passwordResetProgress === 'finalStage'">
              <div class="row q-col-gutter-x-md q-pl-md">
                <div class="col-xs-12 col-md-12">
                  <label class="text-caption text-weight-medium">New Password</label>
                  <q-input outlined :dense="true" type="password" v-model="newPassword"> </q-input>
                </div>
              </div>
            </template>
            <template v-if="passwordResetProgress === 'loginStage'">
              <div class="row q-pl-md q-mt-md">
                <div class="column col-xs-12 col-md-12 items-center">
                  <span class="text-h4 text-weight-bolder text-center text-green-10"> Success </span>
                  <q-icon size="9rem" name="img:../images/svg/648-victory-success.svg" />
                  <span class="text-h6 text-weight-medium text-center"> Password updated successfully </span>
                  <span class="text-caption text-center">
                    Your password has been updated successfully, You can go ahead and login now.
                  </span>
                </div>
              </div>
            </template>
            <div class="row">
              <div class="col-xs-12 col-md-12">
                <q-btn :loading="isLoading" color="primary" :disable="disableBtn" @click="passwordResetProgress === 'initailStage' ?
              requestPasswordResetConfirmationCode() : passwordResetProgress === 'confirmationStage' ?
                confirmResetCode() : passwordResetProgress === 'finalStage' ? updatePassword() : backTologinPage()"
                  style="width: 100%">
                  {{
  passwordResetProgress === 'initailStage' || passwordResetProgress === 'confirmationStage' ?
  'NEXT' : passwordResetProgress === 'finalStage' ? 'CONFIRM' : 'LOG IN'
                  }}
                  <template v-slot:loading>
                    <q-spinner-hourglass v-if="passwordResetProgress === 'initailStage'" class="on-left" />
                    <q-spinner-facebook
                      v-if="passwordResetProgress === 'confirmationStage' || passwordResetProgress === 'finalStage'"
                      class="on-left" />
                    Loading...
                  </template>
                </q-btn>
              </div>
            </div>
          </q-form>
          <div class="column justify-start q-mt-sm" v-if="passwordResetProgress === 'initailStage'">
            <div> Have an account? <router-link class="text-blue" to="/login"> Sign in </router-link> </div>
          </div>
          <div class="column items-center justify-center q-mt-md">
            <span class="text-caption"> Copy &copy; {{ company_name }}. All rights reserved. </span>
            <router-link class="text-blue" to="/"> Back to home </router-link>
          </div>
        </div>
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

import { api } from '../boot/axios'

export default defineComponent({
  name: 'ForgotPasswordComponent',
  props: {
    company_name: {
      type: String,
      required: false
    }
  },
  setup() {

    const isLoading = ref(false)
    const $q = useQuasar()
    const router = useRouter()

    const userId = ref('')
    const confirmationCode = ref('')
    const newPassword = ref('')

    const response = ref(false)
    const disableBtn = ref(false)
    const disableResendText = ref(false)
    const showLoading = ref(false)
    const resendText = ref('')

    const passwordResetProgress = ref('initailStage') // initailStage || confirmationStage || finalStage

    const requestPasswordResetConfirmationCode = async () => {

      if (!userId.value) {
        $q.notify({
          type: 'negative',
          message: 'User ID field can not be empty',
          position: 'top-right',
        })
        return
      }

      isLoading.value = true
      disableBtn.value = true

      try {

        const rawData = { userid: userId.value }

        // send the details to the backend for processing
        const responseData = (await api.post('auth/reset-password/initial', rawData)).data.response

        console.log(responseData)

        if (!responseData.response) {
          $q.notify({
            type: 'negative',
            message: responseData.message,
            position: 'top-right',
          })
        }

        resendText.value = ''
        passwordResetProgress.value = responseData.data

        isLoading.value = false
        disableBtn.value = false

      } catch (error) {

        console.log(error)
        $q.notify({
          type: 'negative',
          message: error.message,
          position: 'top-right',
        })
        isLoading.value = false
        disableBtn.value = false

      }
    }

    const confirmResetCode = async (type = 'request') => {

      if (!confirmationCode.value && type === 'request') {
        $q.notify({
          type: 'negative',
          message: 'Confirmation code can not be empty',
          position: 'top-right',
        })
        return
      }

      if (type === 'resend' && !userId.value) {
        $q.notify({
          type: 'negative',
          message: 'Something went wrong. Please refresh the page and try again',
          position: 'top-right'
        })
        return
      }

      isLoading.value = true
      disableBtn.value = true

      try {

        const rawData = {
          userid: userId.value,
          reset_code: confirmationCode.value
        }

        // send the details to the backend for processing
        const responseData = (await api.post('auth/reset-password/confirmation', rawData)).data.response

        console.log(responseData)

        if (!responseData.response) {
          $q.notify({
            type: 'negative',
            message: responseData.message,
            position: 'top-right',
          })
          if (responseData.data === 'resendStage') {
            countDown(30)
          }
        } else {
          passwordResetProgress.value = responseData.data
        }

        isLoading.value = false
        disableBtn.value = false

      } catch (error) {

        console.log(error)
        $q.notify({
          type: 'negative',
          message: error.message,
          position: 'top-right',
        })

        isLoading.value = false
        disableBtn.value = false

      }
    }

    const updatePassword = async () => {

      if (!newPassword.value) {
        $q.notify({
          type: 'negative',
          message: 'New password can not be empty',
          position: 'top-right',
        })
        return
      }

      isLoading.value = true
      disableBtn.value = true

      try {

        const rawData = {
          userid: userId.value,
          reset_code: confirmationCode.value,
          password: newPassword.value
        }

        // send the details to the backend for processing
        const responseData = (await api.post('auth/reset-password/update', rawData)).data.response

        console.log(responseData)
        if (!responseData.response) {
          $q.notify({
            type: 'negative',
            message: responseData.message,
            position: 'top-right',
          })
        }

        if (responseData.data === 'initialStage') {
          confirmationCode.value = newPassword.value = ''
        }

        passwordResetProgress.value = responseData.data

        isLoading.value = false
        disableBtn.value = false

      } catch (error) {

        console.log(error)
        $q.notify({
          type: 'negative',
          message: error.message,
          position: 'top-right',
        })

        isLoading.value = false
        disableBtn.value = false

      }

    }

    const backToEnterCodePage = () => {
      passwordResetProgress.value = 'initailStage'
      isLoading.value = false
      disableBtn.value = false
      confirmationCode.value = ''
    }

    const backTologinPage = () => {
      passwordResetProgress.value = 'initailStage'
      isLoading.value = false
      disableBtn.value = false
      confirmationCode.value = ''
      newPassword.value = ''
      router.push('/login')
    }

    function countDown(seconds) {
      if (seconds === 0) {
        resendText.value = 'Resend'
        disableResendText.value = false
        disableBtn.value = false
        return
      }
      resendText.value = `Resend in ${seconds}`
      disableResendText.value = true
      disableBtn.value = true
      setTimeout(() => countDown(seconds - 1), 1000)
    }

    return {
      isLoading,
      userId,

      fixed: ref(false),
      disableBtn,
      passwordResetProgress,
      requestPasswordResetConfirmationCode,
      updatePassword,
      confirmResetCode,
      confirmationCode,
      newPassword,
      backToEnterCodePage,
      resendText,
      disableResendText,
      backTologinPage,
      showLoading
    }
  }
})
</script>

<style scoped>
.text-h1 {
  font-size: 2.5rem;
  line-height: 1.2;
}

.login-box-msg,
.register-box-msg {
  margin: 0;
  padding: 0 20px -20px;
  text-align: center;
}

.login-box,
.register-box {
  width: 600px;
}

.card-outline {
  border-top: 4px solid #007bff;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {

  .login-box,
  .register-box {
    width: 360px;
  }

}

/** For mobile devices **/
@media (max-width: 767px) {

  .login-box,
  .register-box {
    width: 360px;
  }

  .login-box-msg,
  .register-box-msg {
    margin: 0;
    margin-bottom: -40px;
    padding: 0 0px 0px 0;
    text-align: center;
  }

}
</style>
