<template>
  <q-page class="flex flex-center">
    <q-header class="bg-primary text-white" elevated>
      <q-toolbar>
        <q-btn v-if="showSidebar" icon="menu" @click="showSidebar = !showSidebar" />
        <q-toolbar-title>My App</q-toolbar-title>
        <q-btn v-if="!showSidebar" icon="menu" @click="showSidebar = !showSidebar" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showSidebar" side="left" breakpoint="md" bordered>
      <q-list>
        <q-item clickable>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {

    return {
      showSidebar: false
    }
  }
})
</script>
