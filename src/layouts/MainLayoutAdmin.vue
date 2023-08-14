<template>
   <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-white-6">
      <q-toolbar class="q-pt-sm bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-space />

        <div class="row q-gutter-md">
          <q-btn-dropdown
            flat
            size="xl"
            icon="account_circle"
            label="ADMIN 01"
          >
            <div class="row q-pa-md bg-accent">
              <div class="column">
                <div class="text-h6 text-white -mb-sm">SETTINGS</div>
                <q-btn
                  color="primary"
                  outline
                  label="Profile"
                  :to="{ name: 'profile' }"
                  size="md"
                  v-close-popup
                />
          </div>
              </div>
            </q-btn-dropdown>
            </div>
            </q-toolbar>
            </q-header>

            <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-secondary">
      <q-card
        class="my-card q-ma-sm bg-accent"
      >
        <q-item class="row">
          <q-item-section class="col-2">
            <img src="public/icons/female.png" style="width: 41px" />
          </q-item-section>
          <q-item-section class="col">
            <q-badge class="text-bold">Admin 01</q-badge>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card class="my-card q-mx-sm q-mt-md bg-accent text-white" style="height: auto">
        <q-list>

          <q-item
            active-class="tab-active"
            exact
            class="navigation-item text-white-6"
            clickable
            :to="{ name: 'dashboardAdmin' }"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="space_dashboard" />
            </q-item-section>
            <q-item-section> REGISTRASI SELLER </q-item-section>
          </q-item>

          <q-separator />
          <q-separator />

            <q-item
              active-class="tab-active"
              class="navigation-item text-white-6"
              exact
              clickable
              :to="{ name: 'RegistSeller' }"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="people" />
              </q-item-section>
              <q-item-section>Pendaftaran Seller</q-item-section>
            </q-item>

            <q-item
            active-class="tab-active"
            class="navigation-item text-white-6"
            exact
            :to="{ name: 'DaftarSeller' }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="assessment" />
            </q-item-section>
            <q-item-section>
              Daftar Seller
            </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            class="navigation-item text-accent"
            exact
            :to="{ name: 'penyakit' }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="coronavirus" />
            </q-item-section>
            <q-item-section>
              Penyakit
            </q-item-section>
          </q-item>
          <q-space />
          <q-expansion-item
            class="navigation-item text-white-6"
            icon="zoom_out"
            label="Master Data"
            >
            <q-item
              active-class="tab-active"
              class="navigation-item text-white-6"
              exact
              clickable
              :to="{ name: 'export' }"
              v-ripple
            >
            <q-item-section avatar>
                <q-icon name="file_download" />
              </q-item-section>
              <q-item-section> Export Data </q-item-section>
            </q-item>

 </q-expansion-item>
</q-list>
</q-card>
</q-drawer>

<q-page-container>
 <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
    }
  }
}
  </script>
