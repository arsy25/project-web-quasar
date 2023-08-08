<template>
    <q-page class="q-pa-md">
        <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.desktop">
<<<<<<< HEAD
                <div class="text-weight-bold text-h3" >HALAMAN ADMIN</div>
=======
                <div class="text-weight-bold text-h3">HALAMAN SUPERADMIN</div>
            </q-card>
            <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.mobile">
                <div class="text-weight-bold text-h5">HALAMAN ADMIN 01</div>
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
            </q-card>
            <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.mobile">
                <div class="text-weight-bold text-h5 text-center" >HALAMAN ADMIN</div>
            </q-card>
            <q-card class="q-pa-md">
                <div class="text-weight-bold">
                  <div class="text-weight-bold text-h6">FORM PENDAFTARAN SELLER</div>
<<<<<<< HEAD
                  <div class="text-italic">Admin can register 'Sellers' Account here.</div>
=======
                  <div class="q-pt-md">Admin has the privileges to recruit Seller here.</div>
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
                </div>
                <q-form
                    @submit="onSubmit"
                    >
                <div class="q-mt-md items-start row q-col-gutter-md">
<<<<<<< HEAD

<div class="q-col-xs-12 q-col-md-4">
                    <q-input
                        class="col-4 q-col-xs-12 q-col-md-6"
                        color="teal"
                        filled
                        outlined
                        v-model="namaadmin"
=======
                  <div class="q-col-xs-12 q-col-md-4">
                    <q-input
                        class="col-4"
                        color="teal"
                        filled
                        outlined
                        v-model="form.NAMA"
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
                        label="Nama Seller">
                        <template v-slot:prepend>
                            <q-icon name="category" />
                        </template>
                    </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
<<<<<<< HEAD
                    <q-input
=======
<q-input
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
                        class="col-4"
                        color="teal"
                        filled
                        outlined
<<<<<<< HEAD
                        v-model="notelp"
=======
                        v-model="form.NOMOR_TELEPON"
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
                        label="No Telepon">
                        <template v-slot:prepend>
                        <q-icon name="scale" />
                        </template>
                    </q-input>
<<<<<<< HEAD
                    </div>
                    <div class="q-col-xs-12 q-col-md-4">
=======
</div>
<div class="q-col-xs-12 q-col-md-4">
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
                    <q-input
                    class="col-4"
                    color="teal"
                    filled
                    outlined
<<<<<<< HEAD
                    v-model="alamat"
=======
                    v-model="form.ALAMAT"
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
                    label="Alamat">
                        <template v-slot:prepend>
                        <q-icon name="savings" />
                        </template>
                    </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
                    <q-input
                    class="col-4"
                    color="teal"
                    filled
                    outlined
<<<<<<< HEAD
                    v-model="password"
=======
                    v-model="form.PASSWORD"
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
                    label="Password">
                        <template v-slot:prepend>
                        <q-icon name="paid" />
                        </template>
                    </q-input>
</div>
                    </div>
                    <div class="q-mt-md">
                        <q-btn label="Submit" type="submit" color="primary"/>
                    </div>
                    </q-form></q-card>
    </q-page>
    </template>

    <script>
<<<<<<< HEAD

 </script>
=======
    const model = () => {
  return {
    NAMA: null,
    PASSWORD: null,
    NOMOR_TELEPON: null,
    ALAMAT: null,
  }
}
export default {
  name: "IndexPage",

  data () {
    return {
      form: model()
    }
  },
  methods: {
    onSubmit() {
      this.onCreate();
    },
    async onCreate() {
        // console.log(this.form)
      await this.$axios
      .post(
        "seller/create",
        this.form
      )
      .finally()
      .then((response) => {
        if (!this.$parseResponse(response.data)) {
          this.$successNotif(response.data.message, "positive");
          this.$router.push({ name: "DaftarSeller"})
        }
      })

    },

  }
}
</script>
>>>>>>> cf3b651889b80f81ea39174a406e18dda57671b1
