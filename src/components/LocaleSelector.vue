<template>
  <q-btn-dropdown
    flat
    :icon="matLanguage"
    :dropdown-icon="matArrowDropDown"
    style="padding-left: 1px; padding-right: 1px"
  >
    <q-list>
      <q-item clickable @click="changeLocale('en-US')" v-close-popup :active="locale === 'en-US'">
        <q-item-section>
          <q-item-label>English</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable @click="changeLocale('zh-CN')" v-close-popup :active="locale === 'zh-CN'">
        <q-item-section>
          <q-item-label>中文（简体）</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { useI18n } from "vue-i18n";
import { matArrowDropDown, matLanguage } from "@quasar/extras/material-icons";
export default {
  name: "LocaleSelector",
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    return { locale, matLanguage, matArrowDropDown }
  },
  methods: {
    changeLocale(locale) {
      this.locale = locale;
      this.$q.localStorage.set('locale', locale);
    },
  }
}
</script>
