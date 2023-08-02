<template>
    <q-page class="q-pa-md bg-primary">
        <q-card class="q-pa-md q-mb-md ">
            <q-item-label class="text-weight-bold">HALAMAN DATABASE</q-item-label>
        </q-card>

        <q-card class="q-pa-md">
            <div class="q-pa-md text-weight-bold">DATABASE PRODUK</div>
            <div>
        <q-table
        class="q-pa-md"
      flat bordered
      dense
      :rows="rows"
      :columns="columns"
      :pagination="pagination"
      row-key="name"
    >
    <template v-slot:body="props">
        <q-tr :props="props">
        <q-td key="name" :props="props">
        {{ props.row.JUDUL }}
        </q-td>
        <q-td key="harga" :props="props">
          {{ props.row.HARGA }}</q-td>
        <q-td key="stok" :props="props">
          {{ props.row.STOCK }}</q-td>
        <q-td key="merk" :props="props">
          {{ props.row.MERK }}</q-td>
        <q-td key="action" :props="props">
        <q-btn @click="this.editdata(props.row)">edit</q-btn>
        <q-btn @click="this.deletedata(props.row)">delete</q-btn>
      </q-td>
        </q-tr>
      </template>
    </q-table>
            </div>
        </q-card>
        <q-dialog v-model="deletenotif" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">HAPUS DATA </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          yakin dek?
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn @click="this.deletedialogdata(this.GUID)" flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

        <q-dialog v-model="editnotif" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 900px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">EDIT DATA </div>
        </q-card-section>
        <q-form
              @submit="onEdit"
              >

        <q-card-section class="q-pt-none">

            <div class="q-mt-md items-start row q-col-gutter-md">
                
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
            <div class="q-mt-md">
                <q-input
                v-model="form.DESKRIPSI_BARANG"
                filled
                type="textarea"
                label="DESKRIPSI BARANG "
                />
            </div>
          </q-card-section>
          
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn type="submit" flat label="OK" v-close-popup />
            <q-btn  flat label="cancel" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    </q-page>

</template>

<script>
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
      deletenotif: false,
      editnotif: false,
      GUID: null,
      form: model(),
      rows: [],
      columns: [
        {
          name: 'name',
          label: 'Produk',
          align: 'left',
          field: "name",
        },

        { name: 'harga', label: 'Harga', field: 'harga' },
        { name: 'stok', label: 'Stok Barang', field: 'stok' },
        { name: 'merk', label: 'Merk', field: 'merk' },
        { name: 'action', label: 'Edit', field: 'action' },
      ],
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 10
      }
    }
  },
  created() { 
    this.getStok();

  },
  methods: {
    deletedata(DATA) {
      this.deletenotif = true
      this.GUID = DATA.GUID
      // console.log(this.GUID)
      // 
      },
      deletedialogdata() {
        this.$axios
      .delete(`/barang/${this.GUID}`)
      .finally(() => this.$q.loading.hide())
      .then((response) => {
        if (!this.$parseResponse(response.data)) {
          this.getStok()
        }
      })
      .catch(() => this.$commonErrorNotif());
      
      },

      editdata(DATA) {
        this.form.JUDUL= DATA.JUDUL
        this.form.HARGA= DATA.HARGA
        this.form.JENIS_GARANSI= DATA.JENIS_GARANSI
        this.form.STOCK= DATA.STOCK
        this.form.DIMENSI= DATA.DIMENSI
        this.form.DIKIRIM_DARI= DATA.DIKIRIM_DARI
        this.form.MERK= DATA.MERK
        this.form.BERAT_PRODUK= DATA.BERAT_PRODUK
        this.form.DESKRIPSI_BARANG= DATA.DESKRIPSI_BARANG
        this.GUID= DATA.GUID
        this.editnotif= true

      },
      onEdit() {
        this.onUpdate()
      },
      onUpdate() {
        // console.log(this.form)
        this.$axios
      .put(`/barang/${this.GUID}`, this.form)
      .finally(() => this.$q.loading.hide())
      .then((response) => {
        if (!this.$parseResponse(response.data)) {
          console.log(response.data)
          this.getStok()
        }
      })
      .catch(() => this.$commonErrorNotif());
      },

    getStok: async function () {
      await this.$axios
      .get('barang/getByStatusAll')
      .finally(() => this.$q.loading.hide())
      .then((response) => {
        if (!this.$parseResponse(response.data)) {
          this.rows = response.data.data;
        }
      })
      .catch(() => this.$commonErrorNotif());
    },
    confirm() {
      $q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>