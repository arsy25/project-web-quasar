<template>
    <q-page class="q-pa-md">
        <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.desktop">
                <div class="text-weight-bold text-h3" >HALAMAN ADMIN</div>
            </q-card>
            <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.mobile">
                <div class="text-weight-bold text-h5 text-center" >HALAMAN ADMIN</div>
            </q-card>
            <q-card class="q-pa-md">
                <div class="text-weight-bold">
                  <div class="text-weight-bold text-h6">FORM PENDAFTARAN SELLER</div>
                  <div class="text-italic">Admin can register 'Sellers' Account here.</div>
                </div>
                <q-form
                    @submit="onSubmit"
                    >
                <div class="q-mt-md items-start row q-col-gutter-md">

<div class="q-col-xs-12 q-col-md-4">
                    <q-input
                        class="col-4 q-col-xs-12 q-col-md-6"
                        color="teal"
                        filled
                        outlined
                        v-model="namaadmin"
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
                        v-model="notelp"
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
                    v-model="alamat"
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
                    v-model="password"
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

 </script>
