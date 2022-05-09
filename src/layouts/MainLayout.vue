<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="matMenu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          EasyRedeem
        </q-toolbar-title>

        <locale-selector />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          {{ $t('navigation') }}
        </q-item-label>
        <essential-link name="about" :icon="matHelp" link="/" />
        <essential-link name="redeem" :icon="matRedeem" link="/redeem" />
        <essential-link name="cards" :icon="matInventory2" link="/cards" />
        <essential-link name="preferences" :icon="matSettings" link="/preferences" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { matMenu, matHelp, matInventory2, matRedeem, matSettings }from '@quasar/extras/material-icons'

import { defineComponent, ref } from 'vue'
import LocaleSelector from "components/LocaleSelector";

export default defineComponent({
  name: 'MainLayout',

  components: {
    LocaleSelector,
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      matMenu, matHelp,matInventory2, matRedeem, matSettings,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
