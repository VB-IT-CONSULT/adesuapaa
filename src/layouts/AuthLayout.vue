<template>
  <q-layout view="hHh lpR fFf" id="dfdsf">
    <div id="snowflakeContainer"></div>
    <div class="custom-shape-divider-top-1677752589">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
      </svg>
    </div>
    <div class="row reverse justify-center items-center bg-image">
      <div class="col-sm-12 col-md-6">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AuthLayout',
  components: {
  },
  setup() {

  }
}
</script>

<style scoped>
#dfdsf {
  position: relative;
}

.bg-image {
  background-color: rgb(192, 208, 208);
  max-width: 100%;
}

.custom-shape-divider-top-1677752589 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1677752589 svg {
  position: relative;
  display: block;
  width: calc(127% + 1.3px);
  height: 456px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1677752589 .shape-fill {
  fill: #FFFFFF;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-top-1677752763 svg {
    width: calc(127% + 1.3px);
    height: 342px;
  }

}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-top-1677752678 svg {
    width: calc(127% + 1.3px);
    height: 302px;
  }
}
</style>
