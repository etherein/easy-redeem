import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { matDone } from "@quasar/extras/material-icons";

export default boot(({ app }) => {
  app.config.globalProperties.$utils = {
    fetchCards (localStorage) {
      let cards = localStorage.getItem('cards');
      if (cards) {
        cards = JSON.parse(cards);
      } else {
        cards = [];
      }
      return cards;
    },
    notifyPositive(message) {
      app.config.globalProperties.$q.notify({
        color: 'positive',
        message: message,
        icon: matDone
      });
    }
  }

  const i18n = createI18n({
    locale: 'en-US',
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
