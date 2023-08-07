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

        <div class="row q-gutter-md" v-if="$q.platform.is.desktop">
          <q-btn-dropdown
            flat
            size="xl"
            icon="account_circle"
            label="Administrator"
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
            <!-- Mobile ONLY ( DONOT Touch :3 ) -->
            <div class="row q-gutter-md" v-if="$q.platform.is.mobile">
      <q-btn-dropdown
        flat
        size="xl"
        icon="account_circle"
        label="Administrator"
        class="flex-center"
      >
        <div class="row q-pa-xs bg-accent text-center flex-center">
          <div class="column">
            <div class="text-h6 text-white -mb-sm">SETTINGS</div>
  <q-separator />
  <div class="q-pt-md">
            <q-btn
              color="primary"

              label="Profile"
              :to="{ name: 'profile' }"
              size="md"
              v-close-popup
            />
</div>


          </div>
        </div>
      </q-btn-dropdown>
    </div>
            </q-toolbar>
            </q-header>

            <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-secondary">
      <q-card
        class="my-card q-ma-sm bg-image"
      >
        <q-item>
          <q-item-section>
            <img src="images/icon/female.png" style="width: 40px" />
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
            :to="{ name: 'dashboard' }"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="space_dashboard" />
            </q-item-section>
            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-separator />
          <q-separator />

          <q-expansion-item
            class="navigation-item text-white-6"
            icon="shopping_cart"
            label="Stok dan Pembelian"
          >
            <q-item
              active-class="tab-active"
              class="navigation-item text-white-6"
              exact
              clickable
              :to="{ name: 'pembelian' }"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="add_shopping_cart" />
              </q-item-section>
              <q-item-section> Pembelian Barang </q-item-section>
            </q-item>

            <q-item
            active-class="tab-active"
            class="navigation-item text-white-6"
            exact
            :to="{ name: 'stok' }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="assessment" />
            </q-item-section>
            <q-item-section>
              Stok Barang
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
          </q-expansion-item>
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
  <style>
  .bg-image {
    background-image: url(https://cdn.spacetelescope.org/archives/images/screen/opo1531b.jpg);
    background-size: 100%;

  }
</style>
