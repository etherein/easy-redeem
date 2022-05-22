<template>
  <q-page padding>
    <div class="q-mb-md">
      <div class="text-h4">{{ $t('cards.title') }}</div>
      <div class="text-subtitle1">{{ $t('cards.subtitle') }}</div>
    </div>

    <q-table
      :title="$t('cards.table.title')"
      :columns="columns"
      :rows="cards"
      selection="multiple"
      v-model:selected="selectedCards"
      row-key="pin"
      :no-data-label="$t('cards.table.noData')"
      :rows-per-page-label="$t('cards.table.rowsPerPage')"
      :selected-rows-label="selectedRowsLabel"
      :icon-first-page="matFirstPage"
      :icon-last-page="matLastPage"
      :pagination-label="paginationLabel"
    >
      <template v-slot:top-left>
        <q-btn
          :label="$t('cards.table.export')"
          :icon="matSystemUpdateAlt"
          color="primary"
          outline
          no-caps
          @click="exportTable"
        />
      </template>
      <template v-slot:top-right>
        <div class="q-gutter-x-sm">
          <q-btn
            :label="$t('cards.add.button')"
            :icon="matAdd"
            color="primary"
            no-caps
            @click="showAddDialog = true"
          />

          <q-btn-dropdown
            color="primary"
            :label="$t('cards.table.options')"
            no-caps
            :disable="! selectedCards.length"
          >
            <q-list>
              <q-item clickable v-close-popup @click="mark('ok')">
                <q-item-section>
                  <q-item-label>{{ $t('cards.table.markOk') }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="mark('redeemed')">
                <q-item-section>
                  <q-item-label>{{ $t('cards.table.markRedeemed') }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="mark('invalid')">
                <q-item-section>
                  <q-item-label>{{ $t('cards.table.markInvalid') }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="deleteSelected">
                <q-item-section>
                  <q-item-label>{{ $t('cards.table.delete') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </template>
    </q-table>

    <q-dialog v-model="showAddDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">{{ $t('cards.add.title') }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-sm">
          <q-input
            filled
            v-model="cardInput"
            :label="$t('cards.table.title')"
            type="textarea"
          />
          <q-input
              filled
              v-model="cardValue"
              :label="$t('cards.table.value')"
          />
          <div class="text-caption">
            {{ $t('cards.add.caption') }}
          </div>
          <div class="text-caption text-black">
            {{ $t('cards.add.count', { count: filterPins(cardInput.split("\n")).length }) }}
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat :label="$t('cards.table.cancel')" v-close-popup />
          <q-btn flat :label="$t('cards.add.button')" v-close-popup @click="add"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { exportFile } from 'quasar'
import { matAdd, matFileUpload, matFirstPage,
  matLastPage, matSystemUpdateAlt, matDone }from '@quasar/extras/material-icons';

function wrapCsvValue (val, formatFn, row) {
  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')

  return `"${formatted}"`
}

export default {
  name: "Cards",

  setup() {
    return {
      matAdd, matFileUpload, matFirstPage,
      matLastPage, matSystemUpdateAlt, matDone
    }
  },

  mounted() {
    this.load();
  },

  data() {
    const columns = [
      { name: 'pin', label: this.$t('cards.table.pin'), field: 'pin' },
      { name: 'value', label: this.$t('cards.table.value'), field: 'value' },
      { name: 'status', label: this.$t('cards.table.status'), field: 'status' },
      { name: 'timeAdded', label: this.$t('cards.table.timeAdded'), field: 'timeAdded' },
      { name: 'timeUpdated', label: this.$t('cards.table.timeUpdated'), field: 'timeUpdated' }
    ];

    return {
      showAddDialog: false,
      cardInput: '',
      cards: [],
      selectedCards: [],
      columns,
      cardValue: this.$utils.getPreference('defaultCardValue', '$10')
    }
  },

  methods: {
    add() {
      let pins = this.cardInput.replaceAll(' ', '').split("\n");
      pins = this.filterPins(pins);

      let newCards = [];
      let date = new Date();
      for (const pin of pins) {
        newCards.push({
          pin: pin,
          value: this.cardValue,
          status: 'ok',
          timeAdded: date.toLocaleString(),
          timeUpdated: date.toLocaleString(),
        });
      }
      let cards = this.$utils.fetchCards(this.$q.localStorage);

      this.$q.localStorage.set('cards', JSON.stringify(cards.concat(newCards)));
      this.load();

      this.$utils.notifyPositive(this.$t('cards.add.added', { count: pins.length }));
      this.cardInput = '';
    },

    filterPins(pins) {
      pins = pins.map(x => x.trim());
      pins = pins.filter(n => n);

      let preferences = JSON.parse(this.$q.localStorage.getItem('preferences'));
      if (preferences && preferences.importAppleValidation) {
        pins = pins.filter(pin => pin[0] === 'X' && pin.length === 16);
      }

      return pins;
    },

    load() {
      let cards = this.$q.localStorage.getItem('cards');
      if (cards) {
        this.cards = JSON.parse(cards).reverse();
      }
    },

    selectedRowsLabel(selected) {
      return this.$t('cards.table.selectedRows', { records: selected });
    },

    paginationLabel(first, last, total) {
      return this.$t('cards.table.pagination', { first: first, last: last, total: total });
    },

    exportTable () {
      const content = [this.columns.map(col => wrapCsvValue(col.label))].concat(
        this.cards.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[ col.field === void 0 ? col.name : col.field ],
          col.format,
          row
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )
    },

    mark(status) {
      let cards = this.$utils.fetchCards(this.$q.localStorage);
      for (const selected of this.selectedCards) {
        let i = 0;
        for (const card of cards) {
          if (selected.pin === card.pin) {
            cards[i].status = status;
          }
          i ++;
        }
      }

      this.$q.localStorage.set('cards', JSON.stringify(cards));
      this.load();
      this.$utils.notifyPositive(this.$t('cards.marked', { status: status, count: this.selectedCards.length }));
      this.selectedCards = [];
    },

    deleteSelected() {
      let cards = this.$utils.fetchCards(this.$q.localStorage);

      let i = cards.length;
      while (i --) {
        for (const selected of this.selectedCards) {
          if (selected.pin === cards[i].pin) {
            cards.splice(i, 1);
            break;
          }
        }
      }

      this.$q.localStorage.set('cards', JSON.stringify(cards));
      this.load();
      this.$utils.notifyPositive(this.$t('cards.deleted', { count: this.selectedCards.length }));
      this.selectedCards = [];
    }
  }
}
</script>

<style scoped>

</style>
