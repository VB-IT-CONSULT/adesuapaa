<template>
  <q-layout view="hHh Lpr lff" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon name="admin_panel_settings" color="blue" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            ADESUAPA
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above elevated class="bg-grey-2" :width="200">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-ripple dense clickable :to="{ name: 'dashboard' }" :active="false">
            <q-item-section avatar>
              <q-icon color="grey" name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item dense v-for="link in links1" :key="link.text" v-ripple clickable :to="{ name: link.name }"
            :active="link === link.name">
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <q-item-label dense header class="text-weight-bold text-uppercase">
            Settings
          </q-item-label>

          <q-item dense v-for="link in links2" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />

          <q-item v-ripple dense clickable>
            <q-item-section avatar>
              <q-icon color="red" name="power_settings_new" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Log Out</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MyLayout',
  setup() {
    const leftDrawerOpen = ref(false)
    const search = ref('')

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      search,

      toggleLeftDrawer,

      links1: [
        { icon: 'maps_home_work', text: 'Institutions', name: 'institution' },
        { icon: 'public', text: 'Countries', name: '' },
        { icon: 'sms', text: 'SMS', name: 'sms' },
        { icon: 'loyalty', text: 'Subscriptions', name: '' },
        { icon: 'payments', text: 'Payments', name: '' },
        { icon: 'mail', text: 'Emails', name: '' },
      ],
      links2: [
        { icon: 'account_circle', text: 'Profile', name: '' },
        { icon: 'settings', text: 'General', name: '' },
        { icon: 'restore', text: 'Backups', name: '' },
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Copyright' },
        { text: 'Contact us' }
      ],
    }
  }
}
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #2196f3

.q-item__section--avatar
  color: inherit
  min-width: 0px
</style>
