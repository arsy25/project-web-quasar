<template>
    <q-page class="q-pa-md">
        <q-card class="q-pa-md q-mb-md">
                <div class="text-weight-bold text-h3" >HALAMAN ADMIN</div>
            </q-card>
            <q-card class="q-pa-md">
                <div class="text-weight-bold">
                  <div class="text-weight-bold text-h6">FORM PENDAFTARAN SELLER</div>
                  <div class="text-italic">Admin bisa mendaftarkan para admin Seller</div>
                </div>
                <q-form
                    @submit="onSubmit"
                    >
                <div class="q-mt-md items-start row q-col-gutter-md">
                    
                    <q-input 
                        class="col-4" 
                        color="teal" 
                        filled 
                        outlined
                        v-model="namaadmin" 
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
                        v-model="notelp" 
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
                    v-model="alamat" 
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
                    v-model="password" 
                    label="password">
                        <template v-slot:prepend>
                        <q-icon name="paid" />
                        </template>
                    </q-input>
    
                    </div>
                    <div class="q-mt-md">
                        <q-btn label="Submit" type="submit" color="primary"/>
                    </div>
                    </q-form></q-card>
    </q-page>
    </template>
    
    <script>
    </script>