"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[7421],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12099:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return g}});var t=r(83117),i=r(80102),a=(r(67294),r(3905)),l=["components"],o={title:"Version 0.80",authors:["derandereandi","naltatis"],tags:["release"],hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/2022/01/09/version-0-80",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2022-01-09/version-0-80.md",source:"@site/blog/2022-01-09/version-0-80.md",title:"Version 0.80",description:"Auch dieses Jahr geht es weiter mit weiteren Aktualisierungen :) Zus\xe4tzlich zu den kleineren Updates mit 0.78 und 0.79, gibt es nun auch ein paar gr\xf6\xdfere \xc4nderungen mit der Version 0.80.",date:"2022-01-09T00:00:00.000Z",formattedDate:"9. Januar 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.555,truncated:!1,authors:[{name:"Andreas Linde",title:"Core-Team, Allrounder",url:"https://github.com/DerAndereAndi",imageURL:"https://github.com/DerAndereAndi.png",key:"derandereandi"},{name:"Michael Geers",title:"Core-Team, UI",url:"https://github.com/naltatis",imageURL:"https://github.com/naltatis.png",key:"naltatis"}],nextItem:{title:"Version 0.77",permalink:"/blog/2021/12/31/version-0-77"}},c={authorsImageUrls:[void 0,void 0]},d=[{value:"<code>evcc configure</code> Verbesserungen",id:"evcc-configure-verbesserungen",children:[],level:2},{value:"Sonnenenergieanteil und Ersparnis",id:"sonnenenergieanteil-und-ersparnis",children:[],level:2},{value:"Docker",id:"docker",children:[],level:2},{value:"Fehlerkorrekturen",id:"fehlerkorrekturen",children:[],level:2},{value:"Download &amp; Installation",id:"download--installation",children:[],level:2},{value:"Changelog",id:"changelog",children:[{value:"Version 0.80",id:"version-080",children:[],level:3},{value:"Version 0.79",id:"version-079",children:[],level:3},{value:"Version 0.78",id:"version-078",children:[],level:3}],level:2}],p={toc:d};function g(e){var n=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Auch dieses Jahr geht es weiter mit weiteren Aktualisierungen :) Zus\xe4tzlich zu den kleineren Updates mit 0.78 und 0.79, gibt es nun auch ein paar gr\xf6\xdfere \xc4nderungen mit der Version 0.80."),(0,a.kt)("h2",{id:"evcc-configure-verbesserungen"},(0,a.kt)("inlineCode",{parentName:"h2"},"evcc configure")," Verbesserungen"),(0,a.kt)("p",null,"Wenn man eine Konfiguration mit ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc configure")," erstellt, wird zuerst nach dem eigenen Know How gefragt. So k\xf6nnen fortgeschrittene Anwender die Konfiguration in technischen Bereichen etwas genauer einstellen. Dieser Modus ist weiterhin auch \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc configure --advanced")," direkt verf\xfcgbar. Einsteiger empfehlen wir diesen Modus jedoch nicht, da mehr Know-How erforderlich ist."),(0,a.kt)("p",null,"Zust\xe4tzlich gibt es weitere Ger\xe4te Templates, Korrekturen an bisherigen Templates und weitere Einstellm\xf6glichkeiten."),(0,a.kt)("h2",{id:"sonnenenergieanteil-und-ersparnis"},"Sonnenenergieanteil und Ersparnis"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ersparnisdialog",src:r(3005).Z})),(0,a.kt)("p",null,"Das neue Ersparnisfeature zeigt dir an wie viel deines Ladestroms durch selbsproduzierte Sonnenenergie gedeckt werden konnte.\nDer Prozentwert wird unten rechts in der Ecke angezeigt.\nBeim Klick darauf bekommst du weitere Details in einem Dialog angezeigt.\nDort siehst du neben der Energiemenge auch deinen effektiven Energiepreis und die Gesamtersparnis gegen\xfcber reinem Netzbezug.\nHier findest du mehr Informationen zur ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/setup#ersparnisberechnung"},"Berechnung und Preiskonfiguration"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"Sponsoren")," finden in dem neuen Dialog unter dem Dankesch\xf6n-Konfetti-Button einen, ",(0,a.kt)("em",{parentName:"p"},"*","drumroll","*"),", Link um unsere neuen evcc Sticker zu bekommen.\nIhr seid die Besten. Danke f\xfcr euren Support! \ud83d\udc9a\ud83e\udd73"),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Wer Docker verwendet, kann nun \xfcber die Tags ",(0,a.kt)("inlineCode",{parentName:"p"},"release")," jeweils die aktuelle Version verwenden. Mit dem Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"nightly")," gibt es dann t\xe4glich neue Builds, die aber noch nicht so gut getestet sein k\xf6nnen. Weitere Informationen zur Docker Installation sind hier zu finden: ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/docker"},"Docker, Synology")),(0,a.kt)("h2",{id:"fehlerkorrekturen"},"Fehlerkorrekturen"),(0,a.kt)("p",null,"Diese Version enth\xe4lt nat\xfcrlich wieder eine Reihe von Fehlerkorrekturen und vielen kleinen Verbesserungen. Schaut euch gerne \xfcber den Changelog Link unten eine detaillierte Auflistung an."),(0,a.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/linux"},"Debian, Ubuntu, Raspberry Pi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/macos"},"macOS Homebrew")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/docker"},"Docker, Synology")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/manual"},"Manuell (inkl. Windows)"))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("h3",{id:"version-080"},"Version 0.80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.80"},"Detaillierte Liste der \xc4nderungen"))),(0,a.kt)("h3",{id:"version-079"},"Version 0.79"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.79"},"Detaillierte Liste der \xc4nderungen"))),(0,a.kt)("h3",{id:"version-078"},"Version 0.78"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.78"},"Detaillierte Liste der \xc4nderungen"))))}g.isMDXComponent=!0},3005:function(e,n,r){n.Z=r.p+"assets/images/ersparnis-d2dbf67d10ca01460eaa3226ec43be6c.png"}}]);