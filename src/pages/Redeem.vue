<template>
  <q-page padding class="flex flex-center" @click="redeeming = true">
    <div class="flex-break">
      <div v-if="cards.length">
        <div class="text-subtitle1 q-mb-lg">
          {{ $t('redeem.cardRemaining', { count: cards.length }) }}
        </div>
        <transition leave-active-class="animated fadeOut absolute">
          <div v-if="! redeeming">
            <div class="text-h6">
              {{ $t('redeem.clickAnywhere') }}
            </div>
            <div class="subtitle1">
              {{ $t('redeem.toRedeem') }}
            </div>
          </div>
        </transition>
        <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight absolute">
          <div v-if="redeeming && ! skipping" :key="cards[0].pin">
            <PINDisplay :pin="cards[0].pin" />
            <div class="text-caption q-mt-md">
              {{ $t('redeem.cardAddedAt', { time: cards[0].timeAdded }) }}
            </div>
          </div>
        </transition>
      </div>
      <div v-else>
        <div class="text-h4">
          {{ $t('redeem.noAvailableCards') }}
        </div>
        <div class="text-subtitle1">
          {{ $t('redeem.addCardsToRedeem') }}
        </div>
        <q-btn
          color="primary"
          :icon="matAdd"
          class="q-mt-md"
          :label="$t('redeem.addCardsButton')"
          @click="$router.push('/cards')"
          no-caps
        />
      </div>
      <div v-if="cards.length && redeeming">
        <div class="q-mt-xl flex flex-center q-gutter-x-md">
          <span class="text-subtitle2">{{ $t('redeem.markAs') }}</span>
          <q-btn
            color="positive"
            no-caps
            label="redeemed"
            :icon="matCheckCircle"
            @click="mark('redeemed')"
          />
          <q-btn
            color="negative"
            no-caps
            label="invalid"
            :icon="matError"
            @click="mark('invalid')"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { matAdd, matCheckCircle, matError } from "@quasar/extras/material-icons";
import PINDisplay from "components/PINDisplay";

export default {
  name: "Redeem",
  components: {PINDisplay},
  setup() {
    return {
      matAdd, matCheckCircle, matError
    }
  },

  data() {
    return {
      cards: [],
      redeeming: false,
      skipping: false,
    }
  },

  mounted() {
    this.load();
  },

  methods: {
    load() {
      let cards = this.$q.localStorage.getItem('cards');
      if (cards) {
        this.cards = JSON.parse(cards);
      }
      this.cards = this.filterOk(this.cards);
    },

    filterOk(cards) {
      return cards.filter(card => card.status === 'ok');
    },

    mark(status) {
      this.$nextTick(() => {
        this.skipping = true;
        let card = this.cards[0];
        card.status = status;
        card.timeUpdated = new Date().toLocaleString();

        let cards = this.$utils.fetchCards(this.$q.localStorage);
        let i = 0;
        for (const c of cards) {
          if (card.pin === c.pin) {
            cards[i] = card;
          }
          i ++;
        }

        this.$q.localStorage.set('cards', JSON.stringify(cards));

        let preferences = JSON.parse(this.$q.localStorage.getItem('preferences'));
        if (preferences && ! preferences.autoRedeemNextCard) {
          this.redeeming = false;
        }

        this.load();
        this.$utils.notifyPositive(this.$t('redeem.marked', { status: status }));
        this.$nextTick(() => {
          this.skipping = false;
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
