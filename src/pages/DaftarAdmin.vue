<template>
    <q-page class="q-pa-md">
      <q-card class="q-pa-md q-mb-md">
        <div class="text-weight-bold text-h5">HALAMAN DAFTAR ADMIN</div>
        <div class="text-italic">INI ADALAH HALAMAN DAFTAR ADMIN</div>
      </q-card>
      <q-card class="q-pa-md bg-primary">
        <q-table
        class="my-sticky-header-table"
        flat bordered
        title="Daftar Admin"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
      </q-card>
    </q-page>
  </template>
  
  <script>
  const columns = [
    {
      name: 'name',
      required: true,
      label: 'NAMA ADMIN',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'notelp', align: 'center', label: 'NOMOR TELEPON', field: 'notelp', sortable: true },
    { name: 'alamat', label: 'ALAMAT', field: 'alamat', sortable: true },
    { name: 'password', label: 'PASSWORD', field: 'password' }
  ]
  
  const rows = [
    {
      name: 'Admin_1',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    }
  ]
  
  export default {
    setup () {
      return {
        columns,
        rows
      }
    }
  }
  </script>
  