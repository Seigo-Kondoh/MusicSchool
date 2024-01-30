import{a as S,u as v,g as k,m as L}from"./links.bbde6535.js";import"./default-i18n.3881921e.js";import{o as t,c as e,a as s,x as c,z as l,t as a,l as _,A as d,D as p}from"./vue.runtime.esm-bundler.308f2021.js";import{_ as u}from"./_plugin-vue_export-helper.5bcc150c.js";import{u as w,W as x}from"./Wizard.32bbe151.js";import{S as y}from"./Logo.bdfb3269.js";import{W}from"./CloseAndExit.dbafe581.js";import"./isArrayLikeObject.965a2149.js";import"./addons.c8e26c5a.js";import"./upperFirst.56425447.js";import"./_stringToArray.4de3b1f3.js";import"./toString.1bb388e8.js";import"./Caret.baea7fe0.js";import"./Index.15a8ee01.js";const z={},$={viewBox:"0 0 904 904",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-giant-gear"},b=s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M339.946 17.7828C330.414 3.54486 312.755 -3.11254 296.564 2.49399C278.121 8.87852 260.082 16.3874 242.555 24.9763C227.17 32.5142 219.451 49.7364 222.838 66.5308L234.904 126.374C238.01 141.777 231.597 157.408 219.42 167.34C200.177 183.033 182.41 200.778 166.494 220.419C156.599 232.627 140.989 239.097 125.576 236.045L65.7164 224.195C48.9007 220.864 31.7008 228.654 24.2209 244.078C19.9962 252.793 16.0076 261.689 12.2677 270.764C8.52771 279.837 5.08966 288.96 1.94772 298.121C-3.61333 314.337 3.10404 331.983 17.3816 341.47L68.2081 375.239C81.2955 383.934 87.8136 399.525 86.2324 415.156C83.6885 440.309 83.792 465.417 86.3882 490.114C88.0313 505.741 81.5674 521.351 68.511 530.093L17.7823 564.055C3.54531 573.587 -3.1121 591.246 2.49346 607.437C8.87895 625.88 16.3879 643.919 24.9767 661.445C32.5156 676.831 49.7367 684.55 66.5321 681.164L126.375 669.097C141.777 665.991 157.41 672.404 167.34 684.579C183.035 703.824 200.779 721.588 220.42 737.506C232.626 747.399 239.097 763.009 236.045 778.424L224.194 838.284C220.866 855.1 228.655 872.301 244.079 879.779C252.793 884.005 261.69 887.992 270.763 891.733C279.837 895.472 288.96 898.911 298.121 902.052C314.336 907.614 331.983 900.896 341.469 886.62L375.239 835.791C383.934 822.705 399.524 816.187 415.157 817.768C440.309 820.311 465.417 820.208 490.114 817.611C505.74 815.968 521.351 822.432 530.093 835.49L564.054 886.217C573.586 900.455 591.245 907.113 607.435 901.506C625.879 895.122 643.919 887.613 661.445 879.024C676.83 871.486 684.549 854.264 681.162 837.469L669.096 777.624C665.99 762.221 672.403 746.59 684.579 736.658C703.823 720.965 721.587 703.22 737.505 683.581C747.398 671.373 763.008 664.903 778.422 667.955L838.283 679.807C855.098 683.136 872.299 675.346 879.778 659.922C882.501 654.306 885.125 648.616 887.648 642.849C889.04 639.667 890.402 636.462 891.731 633.236C895.471 624.164 898.91 615.041 902.052 605.879C907.613 589.665 900.896 572.017 886.618 562.532L835.791 528.761C822.703 520.066 816.185 504.477 817.766 488.844C820.31 463.691 820.207 438.583 817.611 413.886C815.968 398.261 822.432 382.649 835.489 373.907L886.217 339.945C900.455 330.413 907.111 312.756 901.507 296.565C895.121 278.122 887.611 260.081 879.023 242.555C871.484 227.17 854.263 219.452 837.468 222.838L777.626 234.905C762.223 238.009 746.59 231.598 736.66 219.421C720.965 200.176 703.221 182.412 683.58 166.494C671.373 156.599 664.903 140.989 667.955 125.577L679.806 65.7161C683.134 48.9003 675.345 31.6995 659.921 24.2215C651.207 19.9968 642.31 16.0081 633.237 12.2672C624.162 8.52823 615.039 5.08922 605.879 1.94825C589.664 -3.61378 572.017 3.1036 562.531 17.3822L528.762 68.2068C520.067 81.2952 504.476 87.8132 488.843 86.2321C463.691 83.6872 438.582 83.7917 413.885 86.3869C398.26 88.03 382.648 81.5661 373.906 68.5106L339.946 17.7828Z",fill:"currentColor"},null,-1),A=[b];function B(n,r){return t(),e("svg",$,A)}const G=u(z,[["render",B]]);const O={setup(){const{strings:n}=w();return{optionsStore:S(),rootStore:v(),setupWizardStore:k(),composableStrings:n}},components:{SvgAioseoLogo:y,SvgGiantGear:G,WizardCloseAndExit:W},mixins:[x],data(){return{stage:"welcome",strings:L(this.composableStrings,{welcome:this.$t.sprintf(this.$t.__("Welcome to the %1$s Setup Wizard!",this.$td),"AIOSEO"),description:this.$t.sprintf(this.$t.__("%1$s makes it easy to configure your site's SEO settings without the need to hire an expert. And it takes less than 10 minutes too!",this.$td),"AIOSEO"),letsGetStarted:this.$t.__("Let's Get Started",this.$td),goBack:this.$t.__("Go back to the Dashboard",this.$td)})}}},E={class:"aioseo-setup-wizard-welcome"},T={class:"aioseo-welcome-container"},M={class:"aioseo-welcome-content"},N={class:"header"},D={class:"description"},P={class:"aioseo-go-back"},U=["href"],V=["href"];function I(n,r,R,o,i,Z){const C=c("svg-giant-gear"),g=c("svg-aioseo-logo"),m=c("base-button"),h=c("wizard-close-and-exit");return t(),e("div",E,[l(C),s("div",T,[l(g),s("div",M,[s("span",N,a(i.strings.welcome),1),s("span",D,a(i.strings.description),1),l(m,{type:"green",inline:"",tag:"router-link",to:o.setupWizardStore.getNextLink},{default:_(()=>[d(a(i.strings.letsGetStarted)+" → ",1)]),_:1},8,["to"]),s("div",P,[l(h,null,{links:_(()=>[n.$isPro||o.optionsStore.options.advanced.usageTracking?(t(),e("a",{key:0,href:o.rootStore.aioseo.urls.aio.dashboard,class:"no-underline"},"←",8,U)):(t(),e("a",{key:1,href:"#",class:"no-underline",onClick:r[0]||(r[0]=p(f=>o.setupWizardStore.showUsageTrackingModal=!0,["prevent"]))},"←")),d("   "),n.$isPro||o.optionsStore.options.advanced.usageTracking?(t(),e("a",{key:2,href:o.rootStore.aioseo.urls.aio.dashboard},a(i.strings.goBack),9,V)):(t(),e("a",{key:3,href:"#",onClick:r[1]||(r[1]=p(f=>o.setupWizardStore.showUsageTrackingModal=!0,["prevent"]))},a(i.strings.goBack),1))]),_:1})])])])])}const r8=u(O,[["render",I]]);export{r8 as default};
