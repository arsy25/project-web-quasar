<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-mb-md">
      <div class="text-weight-bold text-h5">HALAMAN DATA SELLER</div>
      <div class="text-italic">INI ADALAH HALAMAN DATA SELLER</div>
    </q-card>

    <q-card class="q-pa-md">
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
      {{ props.row.NAMA }}
      </q-td>
      <q-td key="password" :props="props">
        {{ props.row.PASSWORD }}</q-td>
      <q-td key="nomor_telepon" :props="props">
        {{ props.row.NOMOR_TELEPON }}</q-td>
      <q-td key="alamat" :props="props">
        {{ props.row.ALAMAT }}</q-td>
      <q-td key="action" :props="props" class="q-gutter-xs">
      <q-btn color="blue" @click="this.editdata(props.row)">edit</q-btn>
      <q-btn color="red" @click="this.deletedata(props.row)">delete</q-btn>
    </q-td>
      </q-tr>
    </template>
  </q-table>
      </q-card>
      <q-dialog v-model="deletenotif" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-teal text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">HAPUS DATA </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        YAKIN INGIN MENGHAPUS DATA INI?
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
                      v-model="form.NAMA" 
                      label="Nama Seller">
                      <template v-slot:prepend>
                          <q-icon name="category" />
                      </template>
                  </q-input>
  
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
  
                  <q-input 
                  class="col-4" 
                  color="teal" 
                  filled 
                  outlined
                  v-model="form.PASSWORD" 
                  label="password">
                      <template v-slot:prepend>
                      <q-icon name="paid" />
                      </template>
                  </q-input>
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
    deletenotif: false,
    editnotif: false,
    GUID: null,
    form: model(),
    rows: [],
    columns: [
      {
        name: 'name',
        label: 'NAMA SELLER',
        align: 'left',
        field: "name",
      },

      { name: 'password', label: 'PASSWORD', field: 'password' },
      { name: 'nomor_telepon', label: 'NOMOR_TELEPON', field: 'nomor_telepon' },
      { name: 'alamat', label: 'ALAMAT', field: 'alamat' },
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
  this.getDaftarSeller();

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
    .delete(`/seller/${this.GUID}`)
    .finally(() => this.$q.loading.hide())
    .then((response) => {
      if (!this.$parseResponse(response.data)) {
        this.getDaftarSeller()
      }
    })
    .catch(() => this.$commonErrorNotif());
    
    },

    editdata(DATA) {
      this.form.NAMA= DATA.NAMA
      this.form.PASSWORD= DATA.PASSWORD
      this.form.NOMOR_TELEPON= DATA.NOMOR_TELEPON
      this.form.ALAMAT= DATA.ALAMAT
      this.GUID= DATA.GUID
      this.editnotif= true

    },
    onEdit() {
      this.onUpdate()
    },
    onUpdate() {
      // console.log(this.form)
      this.$axios
    .put(`/seller/${this.GUID}`, this.form)
    .finally(() => this.$q.loading.hide())
    .then((response) => {
      if (!this.$parseResponse(response.data)) {
        console.log(response.data)
        this.getDaftarSeller()
      }
    })
    .catch(() => this.$commonErrorNotif());
    },

  getDaftarSeller: async function () {
    await this.$axios
    .get('seller/getByStatusAll')
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
