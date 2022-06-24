"use strict";(self["webpackChunkeasy_redeem"]=self["webpackChunkeasy_redeem"]||[]).push([[897],{260:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(3673),i=a(2323);const s={style:{border:"2px solid #000000"}},d={class:"pin scancardium"};function r(e,t,a,r,n,c){return(0,l.wg)(),(0,l.iD)("table",s,[(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",d,(0,i.zw)(a.pin),1)])])])}const n={name:"PINDisplay",props:{pin:{type:String}}};var c=a(4260);const o=(0,c.Z)(n,[["render",r],["__scopeId","data-v-ba0e4242"]]),m=o},8897:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var l=a(3673),i=a(2323),s=a(8880);const d={class:"flex-break"},r={class:"text-subtitle1 q-mb-lg"},n={class:"text-subtitle1 q-mb-lg",style:{"margin-left":"-10px"}},c={key:0},o={key:0},m={class:"text-h6"},u={class:"subtitle1"},p={class:"text-weight-bold text-h6 q-mb-sm"},h={class:"text-caption q-mt-md"},g={key:1},v={class:"text-h4"},k={class:"text-subtitle1"},f={key:2},b={class:"q-mt-xl flex flex-center q-gutter-x-md"},w={class:"text-subtitle2"};function x(e,t,a,x,_,$){const q=(0,l.up)("q-checkbox"),y=(0,l.up)("q-input"),C=(0,l.up)("PINDisplay"),V=(0,l.up)("q-btn"),D=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(D,{padding:"",class:"flex flex-center",onClick:t[5]||(t[5]=e=>_.redeeming=!0)},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l._)("div",r,(0,i.zw)(e.$t("redeem.cardRemaining",{count:_.cards.length})),1),(0,l._)("div",n,[(0,l.Wm)(q,{modelValue:_.enableValueFilter,"onUpdate:modelValue":[t[0]||(t[0]=e=>_.enableValueFilter=e),$.load]},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("redeem.cardFiltering")),1)])),_:1},8,["modelValue","onUpdate:modelValue"]),(0,l.Wm)(y,{dense:"",class:"float-right q-ml-md",modelValue:_.valueFilter,"onUpdate:modelValue":[t[1]||(t[1]=e=>_.valueFilter=e),$.load],style:{"max-width":"200px"}},null,8,["modelValue","onUpdate:modelValue"])]),_.cards.length?((0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(s.uT,{"leave-active-class":"animated fadeOut absolute"},{default:(0,l.w5)((()=>[_.redeeming?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",m,(0,i.zw)(e.$t("redeem.clickAnywhere")),1),(0,l._)("div",u,(0,i.zw)(e.$t("redeem.toRedeem")),1)]))])),_:1}),(0,l.Wm)(s.uT,{"enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight absolute"},{default:(0,l.w5)((()=>[_.redeeming&&!_.skipping?((0,l.wg)(),(0,l.iD)("div",{key:_.cards[0].pin},[(0,l._)("div",p,(0,i.zw)(_.cards[0].value),1),(0,l.Wm)(C,{pin:_.cards[0].pin},null,8,["pin"]),(0,l._)("div",h,(0,i.zw)(e.$t("redeem.cardAddedAt",{time:_.cards[0].timeAdded})),1)])):(0,l.kq)("",!0)])),_:1})])):((0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("div",v,(0,i.zw)(e.$t("redeem.noAvailableCards")),1),(0,l._)("div",k,(0,i.zw)(e.$t("redeem.addCardsToRedeem")),1),(0,l.Wm)(V,{color:"primary",icon:x.matAdd,class:"q-mt-md",label:e.$t("redeem.addCardsButton"),onClick:t[2]||(t[2]=t=>e.$router.push("/cards")),"no-caps":""},null,8,["icon","label"])])),_.cards.length&&_.redeeming?((0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",b,[(0,l._)("span",w,(0,i.zw)(e.$t("redeem.markAs")),1),(0,l.Wm)(V,{color:"positive","no-caps":"",label:"redeemed",icon:x.matCheckCircle,onClick:t[3]||(t[3]=e=>$.mark("redeemed"))},null,8,["icon"]),(0,l.Wm)(V,{color:"negative","no-caps":"",label:"invalid",icon:x.matError,onClick:t[4]||(t[4]=e=>$.mark("invalid"))},null,8,["icon"])])])):(0,l.kq)("",!0)])])),_:1})}a(71);var _=a(6060),$=a(260);const q={name:"Redeem",components:{PINDisplay:$.Z},setup(){return{matAdd:_.vML,matCheckCircle:_.f3D,matError:_.di5}},data(){return{cards:[],redeeming:!1,skipping:!1,enableValueFilter:!1,valueFilter:this.$utils.getPreference("defaultCardValue","$10")}},mounted(){this.load()},methods:{load(){let e=this.$q.localStorage.getItem("cards");e&&(this.cards=JSON.parse(e)),this.cards=this.filterOk(this.cards),this.enableValueFilter&&(this.cards=this.cards.filter((e=>e.value===this.valueFilter)))},filterOk(e){return e.filter((e=>"ok"===e.status))},mark(e){this.$nextTick((()=>{this.skipping=!0;let t=this.cards[0];t.status=e,t.timeUpdated=(new Date).toLocaleString();let a=this.$utils.fetchCards(this.$q.localStorage),l=0;for(const e of a)t.pin===e.pin&&(a[l]=t),l++;this.$q.localStorage.set("cards",JSON.stringify(a));let i=JSON.parse(this.$q.localStorage.getItem("preferences"));i&&!i.autoRedeemNextCard&&(this.redeeming=!1),this.load(),this.$utils.notifyPositive(this.$t("redeem.marked",{status:e})),this.$nextTick((()=>{this.skipping=!1}))}))}}};var y=a(4260),C=a(4379),V=a(1420),D=a(4842),z=a(2165),F=a(7518),S=a.n(F);const A=(0,y.Z)(q,[["render",x]]),I=A;S()(q,"components",{QPage:C.Z,QCheckbox:V.Z,QInput:D.Z,QBtn:z.Z})}}]);