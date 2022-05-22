export default {
  navigation: '导航',
  description: '用于管理礼品卡和扫描兑换的网页应用。',
  githubRepo: 'GitHub 代码库',
  madeBy: '由 etherein 制造。',
  privacy: '无数据收集。所有内容均存储于阁下的设备。',
  thank: {
    title: '一些很酷的软件',
    subtitle: '它们在制造此应用的过程中被派上了用场，你可能想看看。'
  },
  drawer: {
    about: ['首页/关于', '关于 EasyRedeem'],
    redeem: ['兑换', '兑换您的礼品卡'],
    cards: ['卡', '管理您的库存'],
    preferences: ['偏好', '应用表现设定']
  },
  goHome: '移至首页',

  cards: {
    title: '卡',
    subtitle: '管理您的礼品卡库存',
    table: {
      title: '礼品卡',
      pin: '卡 PIN',
      value: '卡面值',
      status: '状态',
      timeAdded: '添加时间',
      timeUpdated: '更新时间',
      noData: '您尚未添加礼品卡。',
      rowsPerPage: '每页显示数量',
      selectedRows: '已选中 {records} 张卡。',
      pagination: '显示 {total} 张卡中的第 {first}~{last} 张',
      export: '导出',
      cancel: '取消',
      options: '选项',
      markOk: '标记为 ok',
      markRedeemed: '标记为 redeemed',
      markInvalid: '标记为 invalid',
      delete: '删除',
    },
    add: {
      button: '添加',
      title: '添加礼品卡',
      caption: '您可以添加多张卡。每张卡占一行。',
      count: '将添加 {count} 张卡。',
      added: '已添加 {count} 张卡。',
    },
    marked: '已标记 {count} 张卡为 {status}。',
    deleted: '已删除 {count} 张卡。',
  },

  preferences: {
    title: '偏好',
    subtitle: '应用表现设定',
    import: '导入',
    importAppleValidation: '导入时验证并仅导入合规的 App Store & iTunes 礼品卡',
    reset: '重置',
    resetEverything: '重置所有内容',
    resetConfirmation: '您确定吗？包含卡在内的所有已存储数据都将丢失。',
    confirm: '确定',
    cancel: '取消',
    resetDone: '重置完成。',
    redeem: '兑换',
    autoRedeemNextCard: '标记后自动开始兑换下一张卡',
    defaultCardValue: '默认卡面值'
  },

  redeem: {
    noAvailableCards: '无可用卡。',
    addCardsToRedeem: '添加一些礼品卡以进行兑换。',
    addCardsButton: '添加卡',
    marked: '已将卡标记为 {status}。',
    markAs: '标记为：',
    cardRemaining: '库存中剩余 {count} 张可用卡。',
    cardAddedAt: '卡添加日期：{time}',
    clickAnywhere: '点击任意位置',
    toRedeem: '以开始兑换下一张卡。',
    cardFiltering: '过滤卡的面值为'
  }
}
