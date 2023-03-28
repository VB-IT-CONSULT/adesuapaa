<template>
  <v-chart :option="option" autoresize />
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, ToolboxComponent } from 'echarts/components'
import VChart, { THEME_KEY, INIT_OPTIONS_KEY } from 'vue-echarts'

import { defineComponent, provide, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'LineChartComponent',
  components: { VChart },
  props: ['width', 'height', 'options'],
  setup(props) {

    const $q = useQuasar()
    const isMobile = $q.platform.is.mobile

    use([
      CanvasRenderer, TitleComponent, TooltipComponent,
      LegendComponent, LineChart, ToolboxComponent
    ])

    provide(INIT_OPTIONS_KEY, {
      width: !isMobile ? props.width.desktop : props.width.mobile,
      height: !isMobile ? props.height.desktop : props.height.mobile
    })

    provide(THEME_KEY, 'light')

    const option = ref({ ...props.options })

    return {
      option
    }
  }
})
</script>
<!--
<style scoped>
.linehart {
  /* height: 200vh; */
  /* width: 50vh; */
}
</style> -->
