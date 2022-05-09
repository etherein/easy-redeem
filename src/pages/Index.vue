<template>
  <q-page padding class="flex flex-center">
    <div class="flex-break">
      <div class="q-mb-md">
        <div class="text-h4">
          EasyRedeem
        </div>
        <div class="text-subtitle1">
          {{ $t('description') }}
        </div>
      </div>

      <PINDisplay pin="XXSCANXXXTHISXX" class="q-my-md" />

      <q-btn
        :icon="mdiGithub"
        color="black"
        no-caps
        @click="openUrl('https://github.com/etherein/easy-redeem')"
      >
        &nbsp;&nbsp;{{ $t('githubRepo') }}
      </q-btn>

      <div class="q-mt-lg">
        <div class="text-subtitle2">
          {{ $t('madeBy') }}
        </div>
        <div class="text-subtitle2">
          {{ $t('privacy') }}
        </div>
      </div>

      <div class="q-mt-md">
        <div class="text-h6">
          {{ $t('thank.title') }}
        </div>
        <div class="text-caption">
          {{ $t('thank.subtitle') }}
        </div>
        <div class="q-mt-sm q-gutter-x-md q-text-subtitle1">
          <a href="https://quasar.dev">Quasar Framework</a>
          <a href="https://vuejs.org">Vue.js</a>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mdiGithub }from '@quasar/extras/mdi-v6'
import PINDisplay from "components/PINDisplay";

export default defineComponent({
  name: 'PageIndex',
  components: {PINDisplay},
  setup() {
    return {
      mdiGithub
    }
  },

  methods: {
    openUrl(url) {
      window.open(url);
    }
  }
})
</script>

<style scoped>
a {
  color: black;
}
</style>
