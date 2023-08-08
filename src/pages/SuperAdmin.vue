<template>
<q-page class="q-pa-md">
    <q-card class="q-pa-md q-mb-md" v-if="$q.platform.is.desktop">
            <div class="text-weight-bold text-h4" >HALAMAN SUPERADMIN</div>
        </q-card>
        <q-card class="q-pa-md q-mb-md" v-i="$q.platform.is.mobile">
            <div class="text-weight-bold text-h6" >HALAMAN SUPERADMIN</div>
        </q-card>
        <q-card class="q-pa-md">
            <div class="text-weight-bold">
              <div class="text-weight-bold text-h6">FORM PENDAFTARAN ADMIN</div>
              <div class="text-italic">Admin History can be reviewed here.</div>
            </div>
        </q-card>
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
        <div class="col-3 q-mt-md ">
        <q-card class="col-3 q-pa-md">
            <q-badge class="q-pa-md">
        <q-item class="row">
            <q-item-section class="col-3" avatar>
                <q-icon name="people" />
            </q-item-section>

            <q-item-section class="col q-mr-xl" avatar>
                <div class="text-weight-bold">WILAYAH ADMIN</div>
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
        <div class="row q-mt-xs q-gutter-sm" v-if="$q.platform.is.mobile">
        <div class="col-12 q-mt-md">
          <q-card class="q-pa-md">
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
        <div class="col-12 q-mt-md">
          <q-card class="q-pa-md q-pl-xs">
            <q-badge class="q-pa-md">
              <q-item class="row">
                <q-item-section class="col-3" avatar>
                  <q-icon name="people" />
                </q-item-section>

                <q-item-section class="col q-mr-xl" avatar>
                  <div class="text-weight-bold">WILAYAH ADMIN</div>
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
