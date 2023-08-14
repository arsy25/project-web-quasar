<template>
<q-page class="q-pa-md">
    <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.desktop">
            <div class="text-weight-bold text-h3" >HALAMAN ADMIN 01</div>
        </q-card>
        <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.mobile">
            <div class="text-weight-bold text-h5 text-center" >HALAMAN ADMIN 01</div>
        </q-card>
        <q-card class="q-pa-md">
            <div class="text-weight-bold">
              <div class="text-weight-bold text-h6">FORM PENDAFTARAN SELLER</div>
              <div class="text-italic">Seller history can be reviewed here.</div>
            </div>
        </q-card>
       <!-- DESKTOP -->
        <div class="row q-mt-xs q-gutter-sm" v-if="$q.platform.is.desktop">
        <div class="col-3 q-mt-md ">
        <q-card class="col-3 q-pa-md">
            <q-badge class="q-pa-md">
        <q-item class="row">
            <q-item-section class="col-3" avatar>
                <q-icon name="people" />
            </q-item-section>

            <q-item-section class="col q-mr-xl" avatar>
                <div class="text-weight-bold">JUMLAH ADMIN</div>
            </q-item-section>
            <q-separator vertical dark />
            <q-item-section class="col" avatar>
                <div class="text-weight-bold text-h3 q-ml-md">0</div>
            </q-item-section>

        </q-item>

             </q-badge>

        </q-card>
        </div>
        </div>


        <!-- MOBILE -->
        <div class="row q-mt-xs q-gutter-sm" v-if="$q.platform.is.mobile">
        <div class="col-12 q-mt-mdd">
          <q-card class="q-pa-md">
            <q-badge class="q-pa-md">
              <q-item class="row w-pl-md">
                <q-item-section class="col-3" avatar>
                  <q-icon name="people" />
                </q-item-section>

                <q-item-section class="col q-mr-xl" avatar>
                  <div class="text-weight-bold">JUMLAH SELLER</div>
                </q-item-section>
                <q-separator vertical dark />
                <q-item-section class="col" avatar>
                  <div class="text-weight-bold text-h3 q-ml-md">0</div>
                </q-item-section>
              </q-item>
            </q-badge>
          </q-card>
        </div>
      </div>
</q-page>
</template>

<script>
</script>
