<template>
  <q-page padding>
    <div class="q-mb-md">
      <div class="text-h4">{{ $t('preferences.title') }}</div>
      <div class="text-subtitle1">{{ $t('preferences.subtitle') }}</div>
    </div>

    <template v-if="this.preferences">
      <div class="q-mb-md">
        <div class="text-h6">{{ $t('preferences.redeem') }}</div>
        <q-checkbox
          left-label
          v-model="preferences.autoRedeemNextCard"
          :label="$t('preferences.autoRedeemNextCard')"
          @update:model-value="save"
        />
      </div>

      <div class="q-mb-md">
        <div class="text-h6">{{ $t('preferences.import') }}</div>
        <q-checkbox
          left-label
          v-model="preferences.importAppleValidation"
          :label="$t('preferences.importAppleValidation')"
          @update:model-value="save"
        />
      </div>

      <div>
        <div class="text-h6 q-mb-sm">{{ $t('preferences.reset') }}</div>
        <q-btn
          outline
          no-caps
          color="negative"
          :label="$t('preferences.resetEverything')"
          @click="showResetDialog = true"
        />
      </div>
    </template>

    <q-dialog v-model="showResetDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-body1">{{ $t('preferences.resetConfirmation') }}</div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat color="grey" :label="$t('preferences.cancel')" v-close-popup />
          <q-btn flat color="negative" :label="$t('preferences.confirm')" v-close-popup @click="reset"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "Preferences",

  data() {
    return {
      preferences: {},
      showResetDialog: false,
    }
  },

  mounted() {
    this.load();
  },

  methods: {
    load() {
      let preferences = this.$q.localStorage.getItem('preferences');
      if (preferences && preferences !== 'null') {
        this.preferences = JSON.parse(preferences);
      } else {
        this.preferences = {
          importAppleValidation: false,
          autoRedeemNextCard: true
        }
        this.save();
      }
    },
    save() {
      this.$q.localStorage.set('preferences', JSON.stringify(this.preferences));
    },
    reset() {
      this.$q.localStorage.remove('cards');
      this.$q.localStorage.remove('preferences');
      this.load();
      this.$utils.notifyPositive(this.$t('preferences.resetDone'));
    }
  }
}
</script>

<style scoped>

</style>
