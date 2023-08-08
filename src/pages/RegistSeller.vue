<template>
    <q-page class="q-pa-md">
        <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.desktop">
                <div class="text-weight-bold text-h3">HALAMAN SUPERADMIN</div>
            </q-card>
            <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.mobile">
                <div class="text-weight-bold text-h5">HALAMAN ADMIN 01</div>
            </q-card>
            <q-card class="q-pa-md">
                <div class="text-weight-bold">
                  <div class="text-weight-bold text-h6">FORM PENDAFTARAN SELLER</div>
                  <div class="q-pt-md">Admin has the privileges to recruit Seller here.</div>
                </div>
                <q-form
                    @submit="onSubmit"
                    >
                <div class="q-mt-md items-start row q-col-gutter-md">
                  <div class="q-col-xs-12 q-col-md-4">
                    <q-input
                        class="col-4"
                        color="teal"
                        filled
                        outlined
                        v-model="form.NAMA"
                        label="Nama Seller">
                        <template v-slot:prepend>
                            <q-icon name="category" />
                        </template>
                    </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
<q-input
                        class="col-4"
                        color="teal"
                        filled
                        outlined
                        v-model="form.NOMOR_TELEPON"
                        label="No Telepon">
                        <template v-slot:prepend>
                        <q-icon name="scale" />
                        </template>
                    </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
                    <q-input
                    class="col-4"
                    color="teal"
                    filled
                    outlined
                    v-model="form.ALAMAT"
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
                    v-model="form.PASSWORD"
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
