<template>
  <div class="flex flex-center" style="height:100vh;">
    <q-card>
      <div class="row" style="width: 1200px;">
        <div class="col-6 q-pa-md">
          <div>
            <q-item>
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-weight-medium">SAMPLE LOGIN</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="flex flex-center q-mt-xl column">
            <q-item-label class="text-h6 text-wight-medium text-blue-10">
              Welcome back, olivia
            </q-item-label>
            <q-item-label class="text-caption text-wight-medium text-blue-10">
              Welcome back, olivia
            </q-item-label>
            <div class="flex flex-center q-mt-xl column">
              <q-btn @click="redirectToPage" color= "primary">LOGIN DENGAN USERNAME
              </q-btn>
            </div>
          </div>
        </div>
        <div class="col-6">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            height="700px"
          >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
          </q-carousel>
        </div>
      </div>
    </q-card>
  </div>
  <!-- <img src="~assets/wave.png" class="wave" alt="login-wave">
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/login.svg" class="responsive" alt="login-image">
    </div>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
         class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/avatar.svg">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="EMAIL" type="email" v-model="login.username">
            </q-input>
            <q-input label="PASSWORD" type="password" v-model="login.password">
            </q-input>
            <div>
              <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg">
                <router-link class="text-white" to="/RegistrationForm">BUAT AKUN ANDA</router-link>
              <router-link class ="text-white" to="/LoginFormUser">LOGIN DENGAN USERNAME</router-link>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div> -->
</template>

<script>
// import { useQuasar } from 'quasar'
// import { mapActions } from 'vuex'

// let $q

export default {
  name: 'SampleDoang',
  data () {
    return {
      login: {
        // email: '',
        // password: '',
      },
      slide: 1,
      autoplay: true
    }
  },
  methods: {
    redirectToPage () {
      this.$router.push('/RegistrationForm')
    }
    // ...mapActions('auth', ['doLogin']),
    // async submitForm () {
    //   if (!this.login.username || !this.login.password) {
    //     $q.notify({
    //       type: 'negative',
    //       message: 'TIDAK VALID'
    //     })
    //   } else if (this.login.password.length < 6) {
    //     $q.notify({
    //       type: 'negative',
    //       message: 'KARAKTER PASSWORD LEBIH DARI 6'
    //     })
    //   } else {
    //     try {
    //       await this.doLogin(this.login)
    //       const toPath = this.$route.query.to || '/admin'
    //       this.$router.push(toPath)
    //     } catch (err) {
    //       if (err.response.data.detail) {
    //         $q.notify({
    //           type: 'negative',
    //           message: err.response.data.detail
    //         })
    //       }
    //     }
    //   }
    // }
  },
  mounted () {
    // $q = useQuasar()
  }
}
</script>

<style scoped>
/* .wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
} */
</style>
