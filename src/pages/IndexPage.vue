/* eslint-disable */
<template>

<!-- Mobile only, DONOT Touch :3 -->
      <div class="q-gutter-md q-pt-lg q-pr-md q-pl-xs q-p" v-if="$q.platform.is.mobile">
        <q-card class="q-pa-md bg-accent">
              <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
            </q-card>
      <div class="row q-gutter-md">
        <div class="col-6">
          <q-card class="q-pa-md bg-accent">
              <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
            </q-card>

        </div>
        <div class="col-6">
          <q-card class="q-pa-md bg-accent">
            <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
          </q-card>
        </div>
      </div>


      <div class="row q-gutter-md">
        <div class="col-6">
          <q-card class="q-pa-md bg-accent">
            <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="map"  class="q-mr-lg"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
          </q-card>
        </div>
        <div class="col-6">
          <q-card class="q-pa-md bg-accent">
            <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
          </q-card>
        </div>
      </div>

      <div class="row q-gutter-md q-mt-md">
        <div class="col">
          <q-card class="q-pa-md bg-accent">
            <DonutChart />
          </q-card>
        </div>
      </div>


      <div class="row q-gutter-md q-mt-md">
        <div class="col">
          <q-card class="q-pa-md bg-secondary">
            <BarChart />
          </q-card>
        </div>
      </div>


      <div class="row q-gutter-md q-mt-md">
        <div class="col">
          <q-card class="q-pa-md bg-secondary">
            <q-carousel class="q-pa-md" animated v-model="slide" infinite>
              <q-carousel-slide name="opening-jjks2">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/
          gcgKUcJKxIs"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/kOkQ4T5WO9E"
        />
      </q-carousel-slide>

      <q-carousel-slide name="ibiza">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/p87miJIYEEk"
        />
      </q-carousel-slide>
    </q-carousel>

            <div class="row justify-center q-mt-md">
              <q-btn-toggle
                v-model="slide"
                :options="[
                  { label: 'OPENING-JJKS2', value: 'opening-jjks2' },
                  { label: 'Rihanna', value: 'Rihanna' },
                  { label: 'Ibiza Mix', value: 'ibiza' }
                ]"
              />
            </div>
          </q-card>
        </div>
      </div>
    </div>

<!-- Desktop -->
    <q-page class="q-pa-md" v-if="$q.platform.is.desktop">
    <div class="row q-gutter-xl">
      <div class="col-5">
        <div class="row q-gutter-sm q-mb-sm">
          <div class="col">
            <q-card class="q-pa-md bg-accent">
              <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col">
            <q-card class="q-pa-md bg-accent">
              <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
        <div class="row q-gutter-sm q-mb-sm">
          <div class="col">
            <q-card class="q-pa-md bg-accent">
              <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="directions" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col">
            <q-card class="q-pa-md bg-accent">
              <q-item>
                <q-item-section side>
                  <q-avatar rounded color="purple" text-color="white" icon="directions" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold text-blue">1000</q-item-label>
                  <q-item-label caption>test doang</q-item-label>
                </q-item-section>
                <q-item-section side>
                  TESTING
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
        <div class="col q-gutter-sm q-mt-sm">
        <div>
          <div class="col">
          <q-card class="q-pa-md bg-accent"><DonutChart></DonutChart></q-card>
          </div>
        </div>
      </div>
    </div>
      <div class="col q-gutter-sm">
        <div class="row">
          <div class="col">
            <q-card class="q-pa-md bg-secondary">
              <BarChart />
            </q-card>
          </div>
        </div>
        <div class="col"><q-card class="q-pa-md bg-secondary">    <q-carousel
          class="q-pa-md"
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="opening-jjks2">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/
          gcgKUcJKxIs"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/kOkQ4T5WO9E"
        />
      </q-carousel-slide>

      <q-carousel-slide name="ibiza">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/p87miJIYEEk"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        v-model="slide"
        :options="[
          { label: 'OPENING-JJKS2', value: 'opening-jjks2' },
          { label: 'Rihanna', value: 'Rihanna' },
          { label: 'Ibiza Mix', value: 'ibiza' }
        ]"
      />
    </div></q-card></div>
      </div>
        </div>
  </q-page>
</template>
<script>



import BarChart from '../components/apexchart/BarChart.vue'
import DonutChart from '../components/apexchart/DonutChart.vue'
import { ref } from 'vue'
export default ({
  setup () {
    return {
      slide: ref('Rihanna')
    }
  },
  name: 'IndexPage',
  components: {
    BarChart,
    DonutChart
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      name: '',
      umur: '',
      nisn: '',
      alamat: '',
      rows: [],
      columns: [
        { name: 'Nama', required: true, label: 'Nama', align: 'left', field: 'name', sortable: true },
        { name: 'NISN', required: true, label: 'NISN', align: 'left', field: 'nisn', sortable: true },
        { name: 'Alamat', required: true, label: 'Alamat', align: 'left', field: 'alamat', sortable: true },
        { name: 'Umur', required: true, label: 'Umur', align: 'left', field: 'umur', sortable: true }
      ]

    }
  },
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.chart()
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    async chart() {

    },
    // eslint-disable-next-line space-before-function-paren
    submitForm() {
      // Proses pengiriman data atau penyimpanan data di sini
      const newData = {
        name: this.name,
        nisn: this.nisn,
        alamat: this.alamat,
        umur: this.umur
      }
      this.rows.push(newData)

      // Reset input fields
      this.name = ''
      this.nisn = ''
      this.alamat = ''
      this.umur = ''
    },
    // eslint-disable-next-line space-before-function-paren
    resetForm() {
      // Mengatur ulang nilai input ke nilai awal
      this.name = ''
      this.umur = ''
      this.nisn = ''
      this.alamat = ''
    }
  }
})
</script>
