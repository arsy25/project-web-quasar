<template>
    <q-page class="q-pa-md">
        <q-card class="q-pa-md q-mb-md">
            <q-item-label class="text-weight-bold" style="font-size: large;">HALAMAN PEMBELIAN</q-item-label>

            <q-item-caption class="text">Halaman ini berfungsi untuk melakukan pembelian</q-item-caption>

          </q-card>
        <q-card class="q-pa-md">
            <div class="text-weight-bold">
              <q-item-label class="text-weight-bold">FORM PEMBELIAN</q-item-label>
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
                    v-model="form.JUDUL"
                    label="Produk">
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
                    v-model="form.BERAT_PRODUK"
                    label="Berat Produk">
                    <q-chip label="Gram" />
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
                v-model="form.JENIS_GARANSI"
                label="Jenis Garansi">
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
                v-model="form.HARGA"
                label="Harga">
                    <template v-slot:prepend>
                    <q-icon name="paid" />
                    </template>
                </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
                <q-input
                class="col-4"
                color="teal"
                filled
                outlined
                v-model="form.STOCK"
                label="Stok">
                    <template v-slot:prepend>
                    <q-icon name="inventory_2" />
                    </template>
                </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
                <q-input
                class="col-4"
                color="teal"
                filled
                outlined
                v-model="form.MERK"
                label="Merk">
                    <template v-slot:prepend>
                    <q-icon name="storefront" />
                    </template>
                </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
                <q-input
                class="col-4"
                color="teal"
                filled
                outlined
                v-model="form.DIMENSI"
                label="Dimensi">
                    <template v-slot:prepend>
                    <q-icon name="grid_4x4" />
                    </template>
                </q-input>
</div>
<div class="q-col-xs-12 q-col-md-4">
<q-input
                class="col-4"
                color="teal"
                filled
                outlined
                v-model="form.DIKIRIM_DARI"
                label="Dikirim dari">
                    <template v-slot:prepend>
                    <q-icon name="outlined_flag" />
                    </template>
                </q-input>
</div>
            </div>
            <div class="q-mt-md">
                <q-input
                v-model="form.DESKRIPSI_BARANG"
                filled
                type="textarea"
                label="Deskripsi "
                />
            </div>
            <div class="q-mt-md">
                <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
            </q-form>

        </q-card>


    </q-page>

</template>

<script>
import { useQuasar } from 'quasar';
const $q = useQuasar();

const model = () => {
  return {
    JUDUL: null,
    BERAT_PRODUK: null,
    JENIS_GARANSI: null,
    HARGA: null,
    MERK: null,
    DIMENSI: null,
    DIKIRIM_DARI: null,
    DESKRIPSI_BARANG: null,

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
      await this.$axios
      .post(
        "barang/create",
        this.form
      )
      .finally()
      .then((response) => {
        if (!this.$parseResponse(response.data)) {
          this.$successNotif(response.data.message, "positive");
          this.$router.push({ name: "stok"})
        }
      })

    },

  }
}
</script>


<style scoped>
@media(max-width: 600px) {
  .q-input input::placeholder {
    font-size: 14px;
    transform: scale(1.2);
  }
}
</style>
