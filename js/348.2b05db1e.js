"use strict";(self["webpackChunkeasy_redeem"]=self["webpackChunkeasy_redeem"]||[]).push([[348],{8348:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Z});var a=t(3673),r=t(2323);const s={class:"q-mb-md"},o={class:"text-h4"},n={class:"text-subtitle1"},d={class:"q-mb-md"},i={class:"text-h6"},c={class:"q-mb-md"},p={class:"text-h6"},u={class:"text-h6 q-mb-sm"},m={class:"text-body1"};function f(e,l,t,f,h,b){const v=(0,a.up)("q-checkbox"),g=(0,a.up)("q-input"),w=(0,a.up)("q-btn"),V=(0,a.up)("q-card-section"),C=(0,a.up)("q-card-actions"),$=(0,a.up)("q-card"),q=(0,a.up)("q-dialog"),_=(0,a.up)("q-page"),x=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(_,{padding:""},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",o,(0,r.zw)(e.$t("preferences.title")),1),(0,a._)("div",n,(0,r.zw)(e.$t("preferences.subtitle")),1)]),this.preferences?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",d,[(0,a._)("div",i,(0,r.zw)(e.$t("preferences.redeem")),1),(0,a.Wm)(v,{"left-label":"",modelValue:h.preferences.autoRedeemNextCard,"onUpdate:modelValue":[l[0]||(l[0]=e=>h.preferences.autoRedeemNextCard=e),b.save],label:e.$t("preferences.autoRedeemNextCard")},null,8,["modelValue","label","onUpdate:modelValue"])]),(0,a._)("div",c,[(0,a._)("div",p,(0,r.zw)(e.$t("preferences.import")),1),(0,a.Wm)(v,{"left-label":"",modelValue:h.preferences.importAppleValidation,"onUpdate:modelValue":[l[1]||(l[1]=e=>h.preferences.importAppleValidation=e),b.save],label:e.$t("preferences.importAppleValidation")},null,8,["modelValue","label","onUpdate:modelValue"]),(0,a.Wm)(g,{dense:"","stack-label":"",filled:"",label:e.$t("preferences.defaultCardValue"),modelValue:h.preferences.defaultCardValue,"onUpdate:modelValue":[l[2]||(l[2]=e=>h.preferences.defaultCardValue=e),b.save],style:{"max-width":"200px"}},null,8,["label","modelValue","onUpdate:modelValue"])]),(0,a._)("div",null,[(0,a._)("div",u,(0,r.zw)(e.$t("preferences.reset")),1),(0,a.Wm)(w,{outline:"","no-caps":"",color:"negative",label:e.$t("preferences.resetEverything"),onClick:l[3]||(l[3]=e=>h.showResetDialog=!0)},null,8,["label"])])],64)):(0,a.kq)("",!0),(0,a.Wm)(q,{modelValue:h.showResetDialog,"onUpdate:modelValue":l[4]||(l[4]=e=>h.showResetDialog=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)($,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a._)("div",m,(0,r.zw)(e.$t("preferences.resetConfirmation")),1)])),_:1}),(0,a.Wm)(C,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(w,{flat:"",color:"grey",label:e.$t("preferences.cancel")},null,8,["label"]),[[x]]),(0,a.wy)((0,a.Wm)(w,{flat:"",color:"negative",label:e.$t("preferences.confirm"),onClick:b.reset},null,8,["label","onClick"]),[[x]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}const h={name:"Preferences",data(){return{preferences:{},showResetDialog:!1}},mounted(){this.load()},methods:{load(){let e=this.$q.localStorage.getItem("preferences");e&&"null"!==e?this.preferences=JSON.parse(e):(this.preferences={importAppleValidation:!1,autoRedeemNextCard:!0,defaultCardValue:"$10"},this.save())},save(){this.$q.localStorage.set("preferences",JSON.stringify(this.preferences))},reset(){this.$q.localStorage.remove("cards"),this.$q.localStorage.remove("preferences"),this.load(),this.$utils.notifyPositive(this.$t("preferences.resetDone"))}}};var b=t(4260),v=t(4379),g=t(1420),w=t(4842),V=t(2165),C=t(6778),$=t(151),q=t(5589),_=t(9367),x=t(677),y=t(7518),k=t.n(y);const W=(0,b.Z)(h,[["render",f]]),Z=W;k()(h,"components",{QPage:v.Z,QCheckbox:g.Z,QInput:w.Z,QBtn:V.Z,QDialog:C.Z,QCard:$.Z,QCardSection:q.Z,QCardActions:_.Z}),k()(h,"directives",{ClosePopup:x.Z})}}]);