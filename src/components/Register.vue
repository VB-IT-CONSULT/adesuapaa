<template>
  <div>
    <q-card class="my-card login-box card-outline ">
      <q-card-section v-if="registerStage === 'initailStage'">
        <div class="text-h6 text-center" v-if="company_name">
          Register Your Institution
        </div>
      </q-card-section>

      <q-separator v-if="registerStage === 'initailStage'" />

      <q-card-section v-if="registerStage === 'initailStage'">
        <p class="login-box-msg">
          {{
  registerStage === 'initailStage' && !showLoading ?
  'Fill in the form and click continue' : ''
          }}
        </p>
      </q-card-section>

      <q-card-actions vertical>
        <div class="q-pa-md">
          <q-form autocorrect="off" auto autocapitalize="off" autocomplete="off" spellcheck="false" class="q-gutter-md"
            @keyup.enter="processLogin">
            <template v-if="registerStage === 'initailStage' && !showLoading">
              <div class="row q-col-gutter-x-md q-pl-md">
                <div class="col-xs-6 col-md-6">
                  <label class="text-caption text-weight-medium">Administrator Name</label>
                  <q-input v-model="adminName" :class="response ? 'animated rubberBand' : ''" :dense="data.dense"
                    :rules="adminNameRules" placeholder="Administrator Name" ref="adminNameRef" type="text" lazy-rules
                    outlined>
                  </q-input>
                </div>
                <div class="col-xs-6 col-md-6">
                  <label class="text-caption text-weight-medium">Institution Name</label>
                  <q-input :class="response ? 'animated rubberBand' : ''" outlined :dense="data.dense" type="text"
                    v-model="institutionName" label="Institution Name *" lazy-rules :rules="institutionNameRules"
                    ref="institutionNameRef">
                  </q-input>
                </div>
                <div class="col-xs-12 col-md-6">
                  <label class="text-caption text-weight-medium">Phone Number</label>
                  <q-input :class="response ? 'animated rubberBand' : ''" outlined v-model="phoneNumber"
                    :dense="data.dense" type="tel" placeholder="Phone Number" mask="(###) ### - ####" lazy-rules
                    :rules="phoneNumberRules" ref="phoneNumberRef">
                  </q-input>
                </div>
                <div class="col-xs-12 col-md-6">
                  <label class="text-caption text-weight-medium">Email</label>
                  <q-input :class="response ? 'animated rubberBand' : ''" outlined :dense="data.dense" type="email"
                    v-model="email" label="Your Email *" lazy-rules :rules="emailRules" ref="emailRef">
                  </q-input>
                </div>
              </div>
              <div class="row q-col-gutter-x-md q-col-gutter-y-md q-pl-md">
                <div class="col-xs-6 col-md-6">
                  <label class="text-caption text-weight-medium">Select Institution</label>
                  <q-select outlined v-model="selectedInstitution" :options="institutions" label="Select Institution"
                    :dense="data.dense" @update:model-value="getSubscription" />
                </div>
                <div class="col-xs-6 col-md-6">
                  <label class="text-caption text-weight-medium">Select Subcription</label>
                  <q-select outlined v-model="selectedSubscription" :options="subscriptions" label="Select Subcription"
                    :dense="data.dense" />
                </div>
              </div>
              <div class="row q-col-gutter-x-md q-pl-md">
                <div class="col-xs-12 col-md-12">
                  <label class="text-caption text-weight-medium">Select Country</label>
                  <q-select outlined v-model="selectedCountries" :options="countries" label="Select Country"
                    :dense="data.dense" />
                </div>
              </div>
              <div class="row justify-start q-mt-md">
                <div> Adesuapa terms and conditions <span class="text-blue cursor-pointer" @click="fixed = true"> Read
                    T&C
                  </span> </div>
                <div style="margin-top: -10px;">
                  <q-toggle :label="agreement" color="blue" false-value="Disagreed" true-value="Agreed"
                    v-model="agreement" @update:model-value="checkAgeement" />
                </div>
              </div>
            </template>
            <template v-if="registerStage === 'paymentStage'">
              <div class="row q-pl-md q-mt-md" v-if="isLoading">
                <div class="column col-xs-12 col-md-12 items-center">
                  <span class="text-h4 text-weight-bolder text-center"> Processing </span>
                  <q-icon size="9rem" name="img:../images/svg/946-equity-security.svg" />
                  <span class="text-h6 text-weight-medium text-center"> Please wait.. </span>
                  <span class="text-caption text-center">
                    We securing the payment platform for you...
                  </span>
                </div>
              </div>
              <div class="row q-col-gutter-x-md q-col-gutter-y-md q-pl-md q-mt-md">
                <div class="col-xs-12 col-md-12" v-show="!isLoading">
                  <iframe :src="paymentUrl" frameborder="0" width="100%" height="550px" ref="myIframeref"></iframe>
                </div>
              </div>
            </template>
            <template v-if="showLoading">
              <div class="row q-pl-md q-mt-md">
                <div class="column col-xs-12 col-md-12">
                  <span class="text-h4 text-weight-bolder text-center"> Loading </span>
                  <span class="text-h6 text-weight-medium text-center"> Please wait.. </span>
                  <div class="text-center q-pa-md">
                    <q-spinner-ios color="primary" size="12em" />
                    <!-- <q-linear-progress query />
                    <q-linear-progress query color="warning" class="q-mt-sm" />
                    <q-linear-progress reverse query color="secondary" class="q-mt-sm" />
                    <q-linear-progress query color="accent" class="q-mt-sm" />
                    <q-linear-progress reverse query track-color="orange" color="purple" class="q-mt-sm" />
                    <q-linear-progress query color="negative" class="q-mt-sm" /> -->
                  </div>
                </div>
              </div>
            </template>
            <template v-if="registerStage === 'thankyoulStage'">
              <div class="row q-pl-md q-mt-md">
                <div class="column col-xs-12 col-md-12 items-center">
                  <span class="text-h4 text-weight-bolder text-center text-green-6"> Registered successfull y</span>
                  <q-icon size="9rem" name="img:../images/svg/1103-confetti.svg" />
                  <span class="text-h6 text-weight-medium text-center"> Thank you for subscribing! </span>
                  <span class="text-caption text-center">
                    Thank you for registering on Adesuapa! We appreciate your interest and are excited to have you as a
                    member. Our goal is to provide you with the best possible experience, and we look forward to
                    supporting you in your journey. If you have any questions or concerns, please don't hesitate to
                    reach out. Thank you again for ADESUAPA.
                  </span>
                </div>
              </div>
              <div class="row justify-center">
                <div style="overflow: auto; margin-right: 10px;">
                  <router-link class="text-blue" to="/login"> Sign in</router-link>
                </div>
                <div style="overflow: auto;"><router-link class="text-blue" to="/register"> Register </router-link>
                </div>
              </div>
            </template>
            <template v-if="registerStage === 'errorPage'">
              <div class="row q-pl-md q-mt-md">
                <div class="column col-xs-12 col-md-12 items-center">
                  <span class="text-h4 text-weight-bolder text-center text-red-10"> Payment Error </span>
                  <q-icon size="9rem" name="img:../images/svg/1140-error.svg" />
                  <span class="text-h6 text-weight-medium text-center"> Oops! Something Went Wrong </span>
                  <span class="text-caption text-center">
                    We apologize for the inconvenience. It appears that there was an error processing your payment.
                    Please check the information you provided and try again. If the issue persists, don't hesitate to
                    reach out to our customer support team for assistance. Thank you for your understanding and for
                    choosing our service.
                  </span>
                </div>
              </div>
              <div class="row justify-center">
                <div style="overflow: auto; margin-right: 10px;">
                  <router-link class="text-blue" to="/login"> Sign in </router-link>
                </div>
                <div style="overflow: auto;"><router-link class="text-blue" to="/register"> Register </router-link>
                </div>
              </div>
            </template>
            <div class="row" v-if="registerStage === 'initailStage'">
              <div class="col-xs-12 col-md-12">
                <q-btn :loading="isLoading" color="primary" :disable="disableBtn" @click="completeRegisteration"
                  style="width: 100%">
                  {{ registerStage === 'initailStage' ? 'CONTINUE' : 'COMPLETE' }}
                  <template v-slot:loading>
                    <q-spinner-hourglass v-if="registerStage === 'initailStage'" class="on-left" />
                    <q-spinner-facebook v-if="registerStage === 'paymentStage'" class="on-left" />
                    Loading...
                  </template>
                </q-btn>
              </div>
            </div>
          </q-form>
          <div class="column justify-start q-mt-sm" v-if="registerStage === 'initailStage'">
            <div> Have an account? <router-link class="text-blue" to="/login"> Sign in </router-link> </div>
          </div>
          <div class="column items-center justify-center q-mt-md">
            <span class="text-caption"> Copy &copy; {{ company_name }}. All rights reserved. </span>
            <router-link class="text-blue" to="/"> Back to home </router-link>
          </div>
        </div>
      </q-card-actions>
    </q-card>

    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <p class="text-h5 text-center">ADESUAPA TERMS AND CONDITIONS</p>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p class="text-h5 text-center">Terms And Conditions</p>
          <p class="text-h6">Privacy & Policy</p>
          At adesuapa.com, we owe it as a policy to protect your privacy as an online visitor or user of our website/
          software. We use the information we collect about you to further enhance the services that we provide to
          you. adesuapa.com adheres to Laws and Privacy Principles of Ghana and respects the privacy and
          confidentiality of the information provided by you. All information adesuapa.com receives from its customers
          is protected by our secure server. adesuapa.com’s secure server software encrypts all customer information
          before it is sent to us. Furthermore, all customer data collected is secured against unauthorized use or
          access. Mobile Phone or Credit card information is not stored by us on our servers.

          <p class="text-h6 q-mt-md">STORAGE AND SECURITY</p>
          We receive and store information you enter on our website or give us in any other way from time to time. You
          may provide basic contact information such as your name, phone number, address, and email address to enable
          us to send information or process your order or registration and we may also collect additional information
          at other times, including but not limited to, when you provide feedback, change your content or email
          preferences, respond to a survey, or communicate with adesuapa.com customer support or queries.
          We may use personal information collected from you for the purpose of providing you with direct marketing
          material, updates regarding our website and information in the form of a newsletter. This will only apply if
          you have registered or subscribed to such publications by you registering your details with us. However if
          you wish to cease receiving any such information you may let us know either by email or telephone at any
          time and your request will be actioned as soon as possible.
          Individual profile and company details are not used for any other purpose. Details are only supplied to a
          third party supplier when it is required by law, for goods or services which you have purchased or to
          protect adesuapa.com’s copyright, trademarks and other legal rights. We respect the privacy of our online
          visitors. We may collect information on or through this website that can personally identify you. For
          example, we collect personally identifiable information which you volunteer to us to respond to visitor
          questions and comments about us and our products and services, and to mail e-newsletters (“Personal Data”).
          We will use all reasonable means to protect the confidentiality of your Personal Data while in our
          possession or control. We will not knowingly share any of your Personal Data with any third party other than
          our service providers who assist us in providing the information and/or services we are providing to you. To
          the extent that we do share your personal information with a service provider, we would only do so if that
          party has agreed to comply with our privacy standards as described in this privacy policy. Some of our
          service providers may be overseas and may not be subject to Ghana Privacy Laws. Please contact us if you
          require specific details. Any non-personal information, communications and material you send to this website
          or to us by email, or which we obtain from third parties without promises of confidentiality, may be kept,
          used and disclosed by us on a non-confidential basis. We are free to use and reproduce any such information
          freely, and for any purpose whatsoever.
          Specifically, we will be free to use any ideas, concepts, know-how or techniques contained in such
          information for any purpose, including developing, manufacturing or marketing products.

          <p class="text-h6 q-mt-md">INFORMATION DISCLOSURE</p>
          We may from time to time need to disclose certain information, which may include your Personal Data, to
          comply with a legal requirement, such as law, regulation, court order, subpoena, warrant, in the course of a
          legal proceeding or in response to a law enforcement agency request. Also, adesuapa.com may use your
          Personal Data to protect the rights, property or safety of adesuapa.com, its customers or third parties.
          Finally, if there is a change of control in one of our businesses (whether by merger, sale, or otherwise),
          or a sale or transfer of its assets, customer information, which may include your Personal Data, could be
          disclosed to a potential purchaser under an agreement to maintain confidentiality, or could be sold or
          transferred as part of that transaction. And finally we would only disclose your information in good faith
          and where required by any of the above circumstances.

          <p class="text-h6 q-mt-md">THIRD PARTIES</p>
          adesuapa.com does not and will not sell or deal in personal or customer information. We will never disclose
          your personal details to a third party except the necessary information required by providers of products or
          services you have purchased or to protect the rights, property or safety of adesuapa.com, its customers or
          third parties or if required by law. We may however use in a general sense without any reference to your
          name, your information to create marketing statistics, identify user demands and to assist it in meeting
          customer needs generally. In addition, we may use the information that you provide to improve our website
          and services but not for any other use.

          <p class="text-h6 q-mt-md">SECURITY</p>
          adesuapa.com strives to ensure the security, integrity and privacy of personal information submitted to our
          website, and periodically updates its security measures in light of current technologies

          <p class="text-h6 q-mt-md">LINKS</p>
          This website may contain links to other websites. These links are meant for your convenience only. Links to
          third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be
          aware that adesuapa.com is not responsible for the privacy practices of such other websites. We encourage
          our users to be aware, when they leave our website, to read the privacy statements of each and every website
          that collects personally identifiable information. This privacy statement applies solely to information
          collected by this website.

          <p class="text-h6 q-mt-md">CHANGE IN PRIVACY POLICY</p>
          As we plan to ensure our privacy policy remains current, this policy is subject to change. We may modify
          this policy at any time, in our sole discretion and all modifications will be effective immediately upon our
          posting of the modifications on this website. Please return periodically to review our privacy policy. If
          you have any questions or concerns at any time about our privacy policy or the use of your personal
          information, please contact us at info@adesuapa.com and we will respond within 48hours.
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

import { api } from '../boot/axios'
import { isValidEmail } from '../helpers/utils'

export default defineComponent({
  name: 'RegisterComponent',
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

    const adminName = ref('admin aidoo')
    const adminNameRef = ref(null)

    const institutionName = ref('Presby Legon')
    const institutionNameRef = ref(null)

    const phoneNumber = ref('0551541569')
    const phoneNumberRef = ref(null)

    const email = ref('aidoomichael20@gmail.com')
    const emailRef = ref(null)

    const myIframeref = ref(null)

    const response = ref(false)
    const disableBtn = ref(false)
    const showLoading = ref(false)

    const registerStage = ref('initailStage')
    const agreement = ref('Agreed')

    const paymentUrl = ref('')

    const data = ref({
      dense: true,
      isChecked: true,
      emailIsPassed: false,
    })

    const selectedInstitution = ref({
      label: '',
      value: '',
    })

    const selectedSubscription = ref({
      label: '',
      value: '',
    })

    const selectedCountries = ref({
      label: '',
      value: '',
    })
    const countries = ref([])

    const institutions = ref([])

    const subscriptions = ref([])

    onMounted(async () => {
      try {

        $q.loading.show({
          message: 'Loading page please wait...'
        })

        const response = (await api.get('/institutions/active')).data
        console.log(response)
        institutions.value = response.data.map(institution => ({ label: institution.name, value: institution.id }))

        const data = (await api.get('/countries/active')).data
        countries.value = data.countries.map((country) => ({ label: country.name, value: country.id }))

        $q.loading.hide()

      } catch (error) {
        console.log(error)
        $q.loading.hide()
        $q.notify({
          type: 'negative',
          message: error.response?.data || 'Something went wrong refresh the page and try again',
          position: 'top-right',
        })
      }
    })

    const completeRegisteration = async () => {
      adminNameRef.value.validate()
      institutionNameRef.value.validate()
      phoneNumberRef.value.validate()
      emailRef.value.validate()

      if (adminNameRef.value.hasError || institutionNameRef.value.hasError || phoneNumberRef.value.hasError || emailRef.value.hasError) {
        $q.notify({
          type: 'negative',
          message: 'All fields are required',
          position: 'top-right',
        })
        return
      }

      if (selectedInstitution.value.value.trim() === '' || selectedSubscription.value.value.trim() === '' || selectedCountries.value.value.trim() === '') {
        $q.notify({
          type: 'negative',
          message: 'All fields are required',
          position: 'top-right',
        })
        return
      }

      isLoading.value = true

      try {
        // check if email is not already registered
        const response = (await api.get(`/lookup/${email.value}/register/${selectedInstitution.value.value}`)).data

        if (response.status) {
          $q.notify({
            type: 'negative',
            message: 'Email already in use',
            position: 'top-right',
          })
          isLoading.value = false
          return
        }

        const rawData = {
          admin_name: adminName.value,
          institution_name: institutionName.value,
          phone_number: phoneNumber.value,
          email: email.value,
          selected_institution: selectedInstitution.value.value,
          selected_subscription: selectedSubscription.value.value,
          selected_country: selectedCountries.value.value
        }

        showLoading.value = true

        // send the details to the backend for processing
        const resonseData = (await api.post('/payment/initialize', rawData)).data

        registerStage.value = 'paymentStage'
        showLoading.value = false

        if (resonseData.data.status) {
          paymentUrl.value = resonseData.data.data.authorization_url

          const clearInterval = setInterval(() => {
            console.log(myIframeref.value, clearInterval)
            if (myIframeref.value) {

              clearTimeout(clearInterval)
              // registerStage.value = 'paymentStage'
              isLoading.value = false
              console.log('SETTIMEOUT: ', isLoading.value)
            }
          }, 1000)

          // return
          initEvent()
        }

      } catch (error) {

        console.log(error)

        paymentUrl.value = ''
        isLoading.value = false
        registerStage.value = 'initailStage'
        showLoading.value = false

        $q.notify({
          type: 'negative',
          message: error.response?.data || 'Something went wrong refresh the page and try again',
          position: 'top-right',
        })
      }
    }

    const initEvent = () => {

      const eventSource = new EventSource(`http://vsky:4545/v1/see?type=webhook&user=${email.value}`)

      eventSource.onmessage = function (event) {
        console.table(JSON.parse(event.data))
      }

      let errorCount = 0

      eventSource.addEventListener('error', (event) => {
        if (event.target.readyState === EventSource.CLOSED) {
          // Connection was closed by the server or network error
          console.log('EventSource connection closed')
        } else if (event.target.readyState === EventSource.CONNECTING) {
          // Connection is in the process of being established
          console.log('EventSource connection lost, retrying...')
          errorCount += 1
          if (errorCount >= 10) {
            // Disconnect after 5 minutes of errors
            eventSource.close()
            console.log('EventSource connection failed')
          }
        }
      })

      eventSource.addEventListener('webhook', function (event) {
        const response = JSON.parse(event.data)

        if (response.status) {
          isLoading.value = false
          registerStage.value = 'thankyoulStage'
        } else {
          isLoading.value = false
          registerStage.value = 'errorPage'
        }

      }, false)

    }

    const checkAgeement = (agreed) => {
      agreed.toLocaleLowerCase() === 'disagreed' ? disableBtn.value = true : disableBtn.value = false
    }

    const getSubscription = async (institution) => {
      const status = 'active'
      try {
        $q.loading.show({
          message: 'Loading subscriptions. please wait...'
        })
        const response = (await api.get(`/institutions/${status}/${institution.value}`)).data
        subscriptions.value = response.data.map(subsription => ({ label: `${subsription.duration} - $${subsription.price}`, value: subsription.id }))
        $q.loading.hide()
      } catch (error) {
        $q.loading.hide()
        $q.notify({
          type: 'negative',
          message: error.response?.data || 'Something went wrong refresh the page and try again',
          position: 'top-right',
        })
        subscriptions.value = []
      }
    }

    const processLogin = () => {

    }

    return {
      data,
      isLoading,

      adminName,
      adminNameRef,
      adminNameRules: [
        (val) => (val && val.length > 0) || 'Please enter the Administrator Name',
      ],

      institutionName,
      institutionNameRef,
      institutionNameRules: [
        (val) => (val && val.length > 0) || 'Please enter your Institution Name',
      ],

      phoneNumber,
      phoneNumberRef,
      phoneNumberRules: [
        (val) => (val && val.length > 0) || 'Please enter your phone number',
      ],

      email,
      emailRef,
      emailRules: [
        (val) => (val && val.length > 0 && isValidEmail(val)) || 'Please enter a correct email address',
      ],

      completeRegisteration,
      checkAgeement,
      response,
      institutions,
      subscriptions,
      selectedInstitution,
      selectedSubscription,
      agreement,
      fixed: ref(false),
      disableBtn,
      registerStage,
      getSubscription,
      processLogin,
      selectedCountries,
      countries,
      paymentUrl,
      myIframeref,
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
