<template>
  <q-page class="flex q-pa-md">
    <div class="fit row justify-between items-start"> <!--  q-gutter-x-xs -->
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="row q-pl-md">
          <div class="column">
            <div class="text-h6 text-weight-bolder">Adesuapa Dashboard</div>
            <div class="text-caption">Here's whats going on at your business right now</div>
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="col-sm-6 col-md-4">
            <q-item>
              <q-item-section avatar>
                <q-icon color="positive" name="public" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">4 Countries</q-item-label>
                <div class="flex q-col-gutter-x-md">
                  <div class="col-6">
                    <q-item-label caption class="text-green">Active 2</q-item-label>
                  </div>
                  <div class="col-6">
                    <q-item-label caption class="text-red">Inactive 2</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>

          </div>
          <div class="col-sm-6 col-md-4">
            <q-item>
              <q-item-section avatar>
                <q-icon color="accent" name="maps_home_work" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">10 Institutions</q-item-label>
                <div class="flex q-col-gutter-x-md">
                  <div class="col-6">
                    <q-item-label caption class="text-green">Active 4</q-item-label>
                  </div>
                  <div class="col-6">
                    <q-item-label caption class="text-red">Inactive 2</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-sm-6 col-md-4">
            <q-item>
              <q-item-section avatar>
                <q-icon color="secondary" name="sms" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">10 SMS</q-item-label>
                <div class="flex q-col-gutter-x-md">
                  <div class="col-6">
                    <q-item-label caption class="text-green">Left 4</q-item-label>
                  </div>
                  <div class="col-6">
                    <q-item-label caption class="text-red">Used 2</q-item-label>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row q-pl-md q-pt-lg">
          <div class="column">
            <div class="text-subtitle2 text-weight-bolder">Total Sales</div>
            <div class="text-caption">Payment received across all channels</div>
          </div>
          <line-chart-component :options="lineTwoOptions" :width="{ mobile: '360', desktop: '580' }"
            :height="{ mobile: '250', desktop: '300' }" />
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <div class="q-pa-sm row items-start">
              <q-card class="my-card text-body2">
                <q-card-section>
                  <div class="row justify-between">
                    <div class="col-md-4">
                      <div class="column">
                        <div class="text-weight-bolder text-caption">Total Schools</div>
                        <div class="text-caption">Last 7 days</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-weight-bolder text-caption text-right">100</div>
                    </div>
                  </div>
                  <div class="row">
                    <v-chart class="chart" :option="option" autoresize />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="q-pa-sm row items-start">
              <q-card class="my-card text-body2">
                <q-card-section>
                  <div class="row justify-between">
                    <div class="col-md-4">
                      <div class="column">
                        <div class="text-weight-bolder text-caption">Total Schools</div>
                        <div class="text-caption">Last 7 days</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-weight-bolder text-caption text-right">100</div>
                    </div>
                  </div>
                  <div class="row">
                    <line-chart-component :options="lineOption" :width="{ mobile: '347', desktop: '280' }"
                      :height="{ mobile: '150', desktop: '150' }" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="q-pa-sm row items-start">
              <q-card class="my-card text-body2">
                <q-card-section>
                  <div class="row justify-between">
                    <div class="col-md-4">
                      <div class="column">
                        <div class="text-weight-bolder text-caption">Total Schools</div>
                        <div class="text-caption">Last 7 days</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-weight-bolder text-caption text-right">100</div>
                    </div>
                  </div>
                  <div class="row">
                    <v-chart class="barchart" :option="barOptions" autoresize />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="q-pa-sm row items-start">
              <q-card class="my-card text-body2">
                <q-card-section>
                  <div class="row justify-between">
                    <div class="col-md-4">
                      <div class="column">
                        <div class="text-weight-bolder text-caption">Total Schools</div>
                        <div class="text-caption">Last 7 days</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-weight-bolder text-caption text-right">100</div>
                    </div>
                  </div>
                  <div class="row">
                    <v-chart class="chart" :option="pieOption" autoresize />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fit row q-pt-md">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="q-pa-xs">
          <q-table dense title="lorem" :rows="rows" :columns="columns" row-key="name" />
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="q-pa-xs">
          <q-table dense title="lorem" :rows="rows" :columns="columns" row-key="name" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart, LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, VisualMapComponent, AxisPointerComponent, GridComponent, ToolboxComponent } from 'echarts/components'
import VChart, { THEME_KEY, INIT_OPTIONS_KEY } from 'vue-echarts'

import { defineComponent, provide, ref } from 'vue'
import { useQuasar } from 'quasar'

import LineChartComponent from 'components/charts/LineChart.vue'
import { api } from '../boot/axios'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

export default defineComponent({
  name: 'DashboardPage',
  components: { VChart, LineChartComponent },
  setup() {

    const $q = useQuasar()
    const isMobile = $q.platform.is.mobile

    use([
      CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent,
      BarChart, VisualMapComponent, GridComponent, AxisPointerComponent,
      LineChart, ToolboxComponent
    ])

    provide(INIT_OPTIONS_KEY, {
      width: isMobile ? '347' : '280', // 347
      height: '150'
    })

    provide(THEME_KEY, 'light')

    const lineOption = ref({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}',
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        height: '80%',
        left: '3%',
        top: 20,
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    })

    const lineTwoOptions = ref({
      title: {
        text: 'Stacked Line',
        show: false
      },
      tooltip: {
        trigger: 'axis',
        show: true
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      },
      grid: {
        left: '0%',
        top: !isMobile ? 40 : 60,
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    })

    const pieOption = ref({
      legend: {
        top: 'bottom',
        show: false
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: ['20%', '80%'],
          center: ['50%', '45%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'Data 1' },
            { value: 38, name: 'Data 2' },
            { value: 32, name: 'Data 3' }
          ]
        }
      ]
    })

    const barOptions = ref({
      xAxis: {
        type: 'category',
        data: ['Uni', 'JHS', 'SHS', 'NVTI']
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}',
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        width: isMobile ? '270' : '220',
        height: '120',
        left: '15%',
        top: 10,
        right: '10%',
        bottom: 20,
      },
      series: [
        {
          data: [120, 200, 150, 80],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    })

    const option = ref({
      title: {
        text: 'Traffic Sources',
        left: 'center',
        show: false
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        top: '85%',
        left: 'center',
        padding: 5,
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 14
      },
      labelLine: {
        show: false
      },
      series: [
        {
          name: 'Institutions',
          type: 'pie',
          radius: ['40%', '80%'],
          center: ['50%', '45%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          data: [
            { value: 335, name: 'University' },
            { value: 310, name: 'JSH' },
            { value: 234, name: 'SHS' },
            { value: 135, name: 'College' },
          ],
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              fontWeight: 'bold'
            }
          },
        },
      ],
    })

    return {
      isMobile,
      columns,
      rows,
      option,
      barOptions,
      pieOption,
      lineOption,
      lineTwoOptions,
      lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ex ea commodo.
       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.`
    }
  }
})
</script>
