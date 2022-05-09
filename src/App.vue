<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { matArrowDropDown, matChevronRight, matChevronLeft, matWarning } from '@quasar/extras/material-icons';
export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    return {
      locale
    }
  },
  mounted() {
    this.$q.iconSet.arrow.dropdown = matArrowDropDown;
    this.$q.iconSet.table.prevPage = matChevronLeft;
    this.$q.iconSet.table.nextPage = matChevronRight;
    this.$q.iconSet.table.warning = matWarning;
    if (this.$q.localStorage.has('locale')) {
      this.locale = this.$q.localStorage.getItem('locale');
    } else {
      this.locale = this.$q.lang.getLocale();
    }
  }
})
</script>
