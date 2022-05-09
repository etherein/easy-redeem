<template>
  <q-item
    clickable
    tag="a"
    @click="$router.push(link)"
    :active="$route.path === link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t('drawer.' + name + '.0') }}</q-item-label>
      <q-item-label caption>
        {{ $t('drawer.' + name + '.1') }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    name: {
      type: String
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
