(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["92eb0916"],{1677:function(t,a,s){},4209:function(t,a,s){},"4b5b":function(t,a,s){"use strict";var i=s("1677"),l=s.n(i);l.a},bdf7:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"content"},[s("div",{staticClass:"q-pa-md full"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Sensors")]),s("div",{staticClass:"col"},[t._v("Volts")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("a",{staticClass:"hollow button width-112",staticStyle:{float:"right"},attrs:{href:"#"}},[t._v("Zero")])]),s("div",{staticClass:"col"})]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},t._l(t.leftRow,function(a){return s("div",{key:a.id},[t._v("\n              "+t._s(a.id)+": "+t._s(t.toFloat2(a.voltage))+"\n              "),a.isAlarm?s("p",{staticClass:"alarm"},[t._v("Alarm")]):t._e()])}),0),s("div",{staticClass:"col"},t._l(t.rightRow,function(a){return s("div",{key:a.id},[t._v("\n              "+t._s(a.id)+": "+t._s(t.toFloat2(a.voltage))+"\n              "),a.isAlarm?s("p",{staticClass:"alarm"},[t._v("Alarm")]):t._e()])}),0)])])]),s("Navigation")],1)])},l=[],n=s("f4dd"),r={name:"PageAllSensor",components:{Navigation:n["a"]},methods:{toFloat2:function(t){var a=t;return"string"===typeof t&&(a=parseFloat(t)),a.toFixed(2)}},computed:{leftRow:function(){return this.sensors.filter(function(t){return t.id<=4})},rightRow:function(){return this.sensors.filter(function(t){return t.id>4})}},data:function(){return{sensors:[{id:1,voltage:0,isAlarm:!0},{id:2,voltage:0,isAlarm:!1},{id:3,voltage:12.03,isAlarm:!1},{id:4,voltage:0,isAlarm:!0},{id:5,voltage:0,isAlarm:!1},{id:6,voltage:1.8,isAlarm:!0},{id:7,voltage:0,isAlarm:!1},{id:8,voltage:0,isAlarm:!1}]}}},e=r,o=(s("c401f"),s("2877")),c=Object(o["a"])(e,i,l,!1,null,"059ddc07",null);a["default"]=c.exports},c401f:function(t,a,s){"use strict";var i=s("4209"),l=s.n(i);l.a},f4dd:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row container-left-right"},[s("div",{staticClass:"col"},[s("a",{staticClass:"hollow button width-112",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-chevron-left margin-right-10",attrs:{"aria-hidden":"true"}}),t._v("\n        "+t._s(t.$t("button_previous"))+"\n      ")])]),s("div",{staticClass:"col",staticStyle:{display:"flex","justify-content":"center"}},[s("a",{staticClass:"hollow button width-112",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-bars margin-right-10",attrs:{"aria-hidden":"true"}}),t._v("\n        "+t._s(t.$t("button_menu"))+"\n      ")])]),s("div",{staticClass:"col"},[s("a",{staticClass:"hollow button width-112",staticStyle:{float:"right"},attrs:{href:"#"}},[t._v("\n        "+t._s(t.$t("button_next"))+"\n        "),s("i",{staticClass:"fa fa-chevron-right margin-left-10",attrs:{"aria-hidden":"true"}})])])])])},l=[],n={name:"Navigation"},r=n,e=(s("4b5b"),s("2877")),o=Object(e["a"])(r,i,l,!1,null,"70bbd6b9",null);a["a"]=o.exports}}]);