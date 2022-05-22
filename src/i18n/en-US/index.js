export default {
  navigation: 'Navigation',
  description: 'Web app for managing gift cards & scan to redeem.',
  githubRepo: 'GitHub Repository',
  madeBy: 'Made by etherein.',
  privacy: 'No data collected. Everything is stored on your device.',
  thank: {
    title: 'Some cool software',
    subtitle: 'used in the making of this app that you might want to check out'
  },
  drawer: {
    about: ['Home/About', 'About EasyRedeem'],
    redeem: ['Redeem', 'Redeem your gift cards'],
    cards: ['Cards', 'Manage your inventory'],
    preferences: ['Preferences', 'App behavior settings']
  },
  goHome: 'Go Home',

  cards: {
    title: 'Cards',
    subtitle: 'Manage your gift cards inventory',
    table: {
      title: 'Gift Cards',
      pin: 'Card PIN',
      value: 'Card Value',
      status: 'Status',
      timeAdded: 'Time Added',
      timeUpdated: 'Time Updated',
      noData: 'You have not added any gift cards yet.',
      rowsPerPage: 'Cards per page',
      selectedRows: '{records} cards selected.',
      pagination: '{first}~{last} of {total}',
      export: 'Export',
      cancel: 'Cancel',
      options: 'Options',
      markOk: 'Mark as ok',
      markRedeemed: 'Mark as redeemed',
      markInvalid: 'Mark as invalid',
      delete: 'Delete',
    },
    add: {
      button: 'Add',
      title: 'Add Gift Cards',
      caption: 'You can add multiple cards by breaking lines.',
      count: '{count} card(s) will be added.',
      added: '{count} card(s) added.',
    },
    marked: 'Marked {count} card(s) as {status}.',
    deleted: 'Deleted {count} card(s).',
  },

  preferences: {
    title: 'Preferences',
    subtitle: 'App behavior settings',
    import: 'Import',
    importAppleValidation: 'Validate and import valid App Store & iTunes Gift Cards only',
    reset: 'Reset',
    resetEverything: 'Reset Everything',
    resetConfirmation: 'Are you sure? All data including your cards stored will be lost.',
    confirm: 'Confirm',
    cancel: 'Cancel',
    resetDone: 'Done reset.',
    redeem: 'Redeem',
    autoRedeemNextCard: 'Redeem a new card after marking previous card',
    defaultCardValue: 'Default Card Value'
  },

  redeem: {
    noAvailableCards: 'No available cards.',
    addCardsToRedeem: 'Add some gift cards to start redeeming.',
    addCardsButton: 'Add Cards',
    marked: 'Marked card as {status}.',
    markAs: 'Mark as:',
    cardRemaining: '{count} card(s) remaining.',
    cardAddedAt: 'Card added at {time}',
    clickAnywhere: 'Click anywhere',
    toRedeem: 'to start redeeming a new card.',
    cardFiltering: 'Filter cards with value of'
  }
}
