<template>
<div class="registration-page">
 <div class="registration-form">
  <img src="~assets/bgweb.jpg" class="bgweb" alt="regis-wave">
          <div class="q-pa-md">
            <q-card class="q-pa-md">
            <h2 class="text-h4 text-primary q-mb-md">REGISTRASI</h2>

            <q-form @submit="register" class="q-gutter-md">
              <q-input
                outlined
                v-model="email"
                label="Email"
                type="email"
                required
              />

              <q-input
                outlined
                v-model="nik"
                label="NIK"
                type="text"
                required
              />

              <q-input
                outlined
                v-model="password"
                label="Password"
                type="password"
                required
              />

              <q-btn
                color="primary"
                label="Daftar"
                type="submit"
                class="q-mt-md"
              />
              <router-link class="text-white" to ="/regist">KONTAK KAMI</router-link>
              <router-link class="text-white" to ="/regist">KONTAK KAMI</router-link>
            
            </q-form></q-card>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data () {
    return {
      email: '',
      nik: '',
      password: ''
    }
  },
  methods: {
    register () {
      // Lakukan logika pendaftaran di sini, seperti mengirim data ke server
      // Misalnya, Anda dapat menggunakan Axios atau fetch untuk mengirim permintaan POST ke API registrasi
      console.log('Data Registrasi:', this.email, this.nik, this.password)
    }
  }
}
</script>
<style>
.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.registration-form {
  max-width: 400px;
  width: 100%;
}
.bgweb {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
